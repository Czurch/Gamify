"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const pg_1 = require("pg");
const graphql_1 = require("graphql");
const context = async ({ req, res }) => {
    const pool = new pg_1.Pool({
        user: process.env.DB_USER,
        host: "localhost",
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: 5432,
    });
    if (req.body.operationName === "AuthenticateUser" ||
        req.body.operationName === "RegisterUser" ||
        req.body.operationName === "IntrospectionQuery") {
        return { req, pool };
    }
    //get the user token from the headers
    const token = req.headers.authorization || "";
    //try to retrieve a user with the token
    const user = await getUser(token);
    if (!user) {
        throw new graphql_1.GraphQLError("User is not authenticated", {
            extensions: {
                code: "UNAUTHENTICATED",
                http: { status: 401 },
            },
        });
    }
    return { req, pool, user };
};
const getUser = async (token) => {
    try {
        if (token) {
            const user = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
            return user;
        }
        return null;
    }
    catch (error) {
        throw new graphql_1.GraphQLError("User is not authenticated", {
            extensions: {
                code: "UNAUTHENTICATED",
                http: { status: 401 },
            },
        });
    }
};
exports.default = context;
