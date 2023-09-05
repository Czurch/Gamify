import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { GQL_ENDPOINT } from "./config";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      console.error(`GraphQL Error: ${message}, ${location}, ${path}`);
    });
  }
});

const httpLink = from([errorLink, new HttpLink({ uri: GQL_ENDPOINT })]);

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
