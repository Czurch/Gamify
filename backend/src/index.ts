import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { typeDefs, resolvers } from "./schema";
import { Pool } from "pg";
import { setDefaultResultOrder } from "dns";

const serverInit = async () => {
  interface MyContext {
    pool?: Pool;
  }

  const app = express();

  const httpServer = http.createServer(app);

  const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  // WARNING: THIS WILL NEED TO CHANGE FOR PRODUCTION
  const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "gamifyDB",
    password: "newJ0bnow!",
    port: 5432,
  });

  await server.start();

  app.use(
    "/",
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    expressMiddleware(server, { context: async () => ({ pool: pool }) })
  );

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀  Server ready at http://localhost:4000/`);
};

serverInit();
