"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const simpleResolver = async (pool, query, args, logResult) => {
    console.log(pool);
    console.log(query);
    console.log(args);
    const client = await pool.connect();
    try {
        const result = await client.query(query, args);
        if (logResult)
            console.log(result.rows);
        return result.rows[0];
    }
    finally {
        client.release();
    }
};
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # Vital information about individual Users.
  type User {
    # The serialized ID associated with an individual user
    id: ID!
    # The display name chosen by the user
    username: String!
    # Email address of the user
    email: String!
    # User specified password to log in
    password: String
  }

  # Basic information to be used in profile displays
  type Profile {
    # The serialized ID associated with an individual profile
    profile_id: ID!
    # The user id associated with this profile
    user_id: ID!
    # The user's first name
    firstname: String!
    # The user's last name
    lastname: String!
    # The user's total sum of experience
    experience: Int!
    # The user's account level
    account_level: Int!
  }

  input authenticationInput {
    emailOrUsername: String!
    password: String!
  }

  input CreateUserInput {
    username: String!
    email: String!
    password: String!
  }

  input CreateProfileInput {
    firstname: String!
    lastname: String!
  }

  scalar Token

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    getUserByID: User
    getUserByEmail(email: String!): User
    getUserByName(username: String!): User
    authenticateUser(input: authenticationInput!): Token!
    getProfilebyID: Profile
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    createProfile(input: CreateProfileInput!): Profile!
  }
`;
exports.typeDefs = typeDefs;
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        getUserByID: async (parent, args, contextValue) => {
            if (!contextValue.user)
                return;
            return simpleResolver(contextValue.pool, 'SELECT * FROM "user" WHERE id = $1;', [contextValue.user.userId]);
        },
        getUserByEmail: async (_, { email }, contextValue) => {
            return simpleResolver(contextValue.pool, 'SELECT * FROM "user" WHERE email = $1;', [email]);
        },
        getUserByName: async (_, { username }, contextValue) => {
            return simpleResolver(contextValue.pool, 'SELECT * FROM "user" WHERE username = $1;', [username]);
        },
        authenticateUser: async (_, { input }, { pool }) => {
            const client = await pool.connect();
            try {
                const result = await client.query('SELECT * FROM "user" WHERE (username = $1 OR email = $1) AND password = $2', [input.emailOrUsername, input.password]);
                if (result.rows.length == 0)
                    throw new Error("Authentication Error: Invalid username/password");
                // instead of returning user data, we should return a token
                const user = result.rows[0];
                const token = jsonwebtoken_1.default.sign({ userId: user.id }, process.env.JWT_SECRET, {
                    expiresIn: "6h",
                });
                return token;
            }
            finally {
                client.release();
            }
        },
        getProfilebyID: async (_, __, contextValue) => {
            console.log(contextValue.user);
            return simpleResolver(contextValue.pool, "SELECT * FROM Profile WHERE (user_id = $1);", [contextValue.user.userId]);
        },
    },
    Mutation: {
        createUser: async (_, { input }, { pool }) => {
            const client = await pool.connect();
            try {
                // Check if the email already exists
                const emailCheck = await client.query('SELECT * FROM "user" WHERE email = $1;', [input.email]);
                if (emailCheck.rows.length > 0) {
                    throw new Error("Authentication Error: Email already exists");
                }
                // Check if the username already exists
                const usernameCheck = await client.query('SELECT * FROM "user" WHERE username = $1;', [input.username]);
                if (usernameCheck.rows.length > 0) {
                    throw new Error("Authentication Error: Username already exists");
                }
                const result = await client.query('INSERT INTO "user" (username, email, password) VALUES ($1, $2, $3) RETURNING *;', [input.username, input.email, input.password]);
                return result.rows[0];
            }
            finally {
                client.release();
            }
        },
        createProfile: async (_, { input }, contextValue) => {
            const client = await contextValue.pool.connect();
            try {
                const result = await client.query("INSERT INTO Profile (user_id, firstname, lastname, experience, account_level) VALUES ($1, $2, $3, 0, 1) RETURNING *;", [contextValue.user.userId, input.firstname, input.lastname]);
                return result.rows[0];
            }
            finally {
                client.release();
            }
        },
    },
};
exports.resolvers = resolvers;
