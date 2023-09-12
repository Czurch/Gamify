import jwt from "jsonwebtoken";
import express from "express";
import { Pool } from "pg";
import { GraphQLError } from "graphql";

const context = async ({ req, res }) => {
  const pool = new Pool({
    user: process.env.DB_USER,
    host: "localhost",
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432,
  });

  if (
    req.body.operationName === "AuthenticateUser" ||
    req.body.operationName === "RegisterUser" ||
    req.body.operationName === "IntrospectionQuery"
  ) {
    return { req, pool };
  }

  //get the user token from the headers
  const token = req.headers.authorization || "";

  //try to retrieve a user with the token
  const user = await getUser(token);

  if (!user) {
    throw new GraphQLError("User is not authenticated", {
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
      const user = jwt.verify(token, process.env.JWT_SECRET);
      return user;
    }
    return null;
  } catch (error) {
    throw new GraphQLError("User is not authenticated", {
      extensions: {
        code: "UNAUTHENTICATED",
        http: { status: 401 },
      },
    });
  }
};

export default context;
