import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import { Stack } from "expo-router";
import { ApolloProvider } from "@apollo/client";
import client from "../graphQL/client";

const Layout: React.FC = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Stack />
      </ApolloProvider>
    </Provider>
  );
};

export default Layout;
