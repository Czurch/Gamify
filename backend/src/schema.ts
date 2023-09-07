import jwt from "jsonwebtoken";

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
    password: String!
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
    user_id: Int!
    firstname: String!
    lastname: String!
  }

  scalar Token

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    getUserByID(id: Int!): User
    getUserByEmail(email: String!): User
    getUserByName(username: String!): User
    authenticateUser(input: authenticationInput!): Token!
    getProfilebyID(id: Int!): Profile
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    createProfile(input: CreateProfileInput!): Profile!
  }
`;

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    getUserByID: async (_, { id }, { pool, req }) => {
      const authorizationHeader = req.headers.authorization;
      if (!authorizationHeader)
        throw new Error("Authentication Error: Token is missing");

      const token = authorizationHeader.replace("Bearer", "");
      try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        const client = await pool.connect();

        try {
          const result = await client.query(
            'SELECT * FROM "user" WHERE id = $1;',
            [id]
          );
          return result.rows[0];
        } finally {
          client.release();
        }
      } catch (error) {
        throw new Error("Authentication Error: Invalid or expired token");
      }
    },
    getUserByEmail: async (_, { email }, { pool }) => {
      const client = await pool.connect();
      try {
        const result = await client.query(
          'SELECT * FROM "user" WHERE email = $1;',
          [email]
        );
        return result.rows[0];
      } finally {
        client.release();
      }
    },
    getUserByName: async (_, { username }, { pool }) => {
      const client = await pool.connect();
      try {
        const result = await client.query(
          'SELECT * FROM "user" WHERE username = $1;',
          [username]
        );
        return result.rows[0];
      } finally {
        client.release();
      }
    },
    authenticateUser: async (_, { input }, { pool }) => {
      const client = await pool.connect();
      try {
        const result = await client.query(
          'SELECT * FROM "user" WHERE (username = $1 OR email = $1) AND password = $2',
          [input.emailOrUsername, input.password]
        );
        if (result.rows.length == 0)
          throw new Error("Authentication Error: Invalid username/password");
        // instead of returning user data, we should return a token
        const user = result.rows[0];
        const token = jwt.sign(
          { userId: user.id, username: user.usename },
          process.env.JWT_SECRET,
          { expiresIn: "6h" }
        );
        return token;
      } finally {
        client.release();
      }
    },
    getProfilebyID: async (_, { user_id }, { pool }) => {
      const client = await pool.connect();
      try {
        const result = await client.query(
          "SELECT * Profile WHERE (user_id = $1)",
          [user_id]
        );
        return result.rows[0];
      } finally {
        client.release();
      }
    },
  },
  Mutation: {
    createUser: async (_, { input }, { pool }) => {
      const client = await pool.connect();
      try {
        // Check if the email already exists
        const emailCheck = await client.query(
          'SELECT * FROM "user" WHERE email = $1;',
          [input.email]
        );
        if (emailCheck.rows.length > 0) {
          throw new Error("Authentication Error: Email already exists");
        }

        // Check if the username already exists
        const usernameCheck = await client.query(
          'SELECT * FROM "user" WHERE username = $1;',
          [input.username]
        );
        if (usernameCheck.rows.length > 0) {
          throw new Error("Authentication Error: Username already exists");
        }
        const result = await client.query(
          'INSERT INTO "user" (username, email, password) VALUES ($1, $2, $3) RETURNING *;',
          [input.username, input.email, input.password]
        );
        return result.rows[0];
      } finally {
        client.release();
      }
    },
    createProfile: async (_, { input }, { pool }) => {
      const client = await pool.connect();
      try {
        const result = await client.query(
          "INSERT INTO Profile (user_id, firstname, lastname, experience, account_level) VALUES ($1, $2, $3, 0, 1) RETURNING *;",
          [input.user_id, input.firstname, input.lastname]
        );
        return result.rows[0];
      } finally {
        client.release();
      }
    },
  },
};

export { typeDefs, resolvers };
