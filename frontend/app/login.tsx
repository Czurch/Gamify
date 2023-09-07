import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SafeAreaView, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { LOGIN_QUERY } from "../graphQL/queries";
import authSlice from "../store/reducers/authReducer";
import * as Crypto from "expo-crypto";
import client from "../client";
import LoginForm from "../components/forms/login";

const Login: React.FC = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const userAuth = useSelector((state: { auth }) => state.auth);
  const { setToken } = authSlice.actions;

  useEffect(() => {
    if (!data) {
      setLoading(false);
      return;
    }
    const token = data.authenticateUser;

    // Use a separate async function to await decodeToken
    const handleTokenDecoding = async () => {
      try {
        const decoded = await decodeToken(token);
        return decoded;
      } catch (e) {
        console.error(e.message);
      }
    };

    handleTokenDecoding();

    try {
      dispatch(setToken(token));
    } catch (error) {
      console.error("Error while dispatching setToken:", error);
    }
  }, [data]);

  const decodeToken = async (token) => {
    try {
      const decoded = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        token
      );
      return decoded;
    } catch (e) {
      console.error(e.message);
      throw e;
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const result = await client.request(LOGIN_QUERY, {
        input: { emailOrUsername: emailOrUsername, password: password },
      });
      console.log(result);
      setData(result);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#F7F6FE", paddingTop: 32 }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <LoginForm
        setEmailOrUsername={setEmailOrUsername}
        setPassword={setPassword}
        handleLogin={handleLogin}
        loading={loading}
      />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  submitButton: {
    width: "40%",
    height: 40,
    backgroundColor: "grey",
  },
  errorText: {
    color: "red",
  },
});
