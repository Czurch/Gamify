import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { GQL_ENDPOINT } from "./config";
import { onError } from "@apollo/client/link/error";
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(GQL_ENDPOINT, {
  headers: {
    "x-apollo-operation-name": "authenticateUser",
  },
});
export default client;
