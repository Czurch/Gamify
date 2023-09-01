"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const drainHttpServer_1 = require("@apollo/server/plugin/drainHttpServer");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const schema_1 = require("./schema");
const pg_1 = require("pg");
const serverInit = async () => {
    const app = (0, express_1.default)();
    const httpServer = http_1.default.createServer(app);
    const server = new server_1.ApolloServer({
        typeDefs: schema_1.typeDefs,
        resolvers: schema_1.resolvers,
        plugins: [(0, drainHttpServer_1.ApolloServerPluginDrainHttpServer)({ httpServer })],
    });
    // WARNING: THIS WILL NEED TO CHANGE FOR PRODUCTION
    const pool = new pg_1.Pool({
        user: "postgres",
        host: "localhost",
        database: "gamifyDB",
        password: "newJ0bnow!",
        port: 5432,
    });
    await server.start();
    app.use("/", (0, cors_1.default)(), body_parser_1.default.json(), (0, express4_1.expressMiddleware)(server, { context: async () => ({ pool: pool }) }));
    await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀  Server ready at http://localhost:4000/`);
};
serverInit();
