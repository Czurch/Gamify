import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import { typeDefs, resolvers } from "./schema";
import { Pool } from "pg";
import morgan from "morgan";
import context from "./context";
import { UserInterface } from "./interfaces";

require("dotenv").config();

const serverInit = async () => {
  interface MyContext {
    pool?: Pool;
    user?: UserInterface;
  }

  const logLevel = process.argv[2] || "dev";

  const app = express();

  const httpServer = http.createServer(app);

  const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    formatError: (error) => {
      console.error(error);
      return error;
    },
  });

  await server.start();

  app.use(
    "/",
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    expressMiddleware(server, { context: context }),
    morgan(logLevel)
  );

  app.get("/auth/google/callback", (req, res) => {
    try {
      const authorizationCode = req.query.code;
      console.log(authorizationCode);
      res.status(200).json({ message: "Authentication successful" });
      // Handle the authorization code and exchange it for tokens here
      // (Use the google-auth-library or OAuth2Client as you've mentioned in your code)
      // Update user profile in your database and generate an authentication token
      // Return the authentication token as a response
    } catch (err) {
      console.error("Error during Google OAuth callback:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀  Server ready at http://localhost:4000/`);
};

serverInit();
