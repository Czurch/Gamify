import { useSelector } from "react-redux";
import { GQL_ENDPOINT } from "../config";
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(GQL_ENDPOINT, {
  headers: {
    "x-apollo-operation-name": "authenticateUser",
  },
});
export default client;
