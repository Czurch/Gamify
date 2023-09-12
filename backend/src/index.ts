import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
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

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀  Server ready at http://localhost:4000/`);
};

serverInit();
