import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import { Stack } from "expo-router";

const Layout: React.FC = () => {
  return (
    <Provider store={store}>
      <Stack />
    </Provider>
  );
};

export default Layout;
