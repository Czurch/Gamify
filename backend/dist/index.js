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
const morgan_1 = __importDefault(require("morgan"));
const context_1 = __importDefault(require("./context"));
require("dotenv").config();
const serverInit = async () => {
    const logLevel = process.argv[2] || "dev";
    const app = (0, express_1.default)();
    const httpServer = http_1.default.createServer(app);
    const server = new server_1.ApolloServer({
        typeDefs: schema_1.typeDefs,
        resolvers: schema_1.resolvers,
        plugins: [(0, drainHttpServer_1.ApolloServerPluginDrainHttpServer)({ httpServer })],
        formatError: (error) => {
            console.error(error);
            return error;
        },
    });
    await server.start();
    app.use("/", (0, cors_1.default)(), body_parser_1.default.json(), (0, express4_1.expressMiddleware)(server, { context: context_1.default }), (0, morgan_1.default)(logLevel));
    app.get("/auth/google/callback", (req, res) => {
        try {
            const authorizationCode = req.query.code;
            console.log(authorizationCode);
            res.status(200).json({ message: "Authentication successful" });
            // Handle the authorization code and exchange it for tokens here
            // (Use the google-auth-library or OAuth2Client as you've mentioned in your code)
            // Update user profile in your database and generate an authentication token
            // Return the authentication token as a response
        }
        catch (err) {
            console.error("Error during Google OAuth callback:", err);
            res.status(500).json({ error: "Internal server error" });
        }
    });
    await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀  Server ready at http://localhost:4000/`);
};
serverInit();
