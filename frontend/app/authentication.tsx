import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Profile, QuestList } from "../constants/interfaces";
import { Bar } from "react-native-progress";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";
import { Stack } from "expo-router";

import { useLazyQuery } from "@apollo/client";
import { LOGIN_QUERY } from "../graphQL/queries";
import authSlice from "../store/reducers/authReducer";
import { request, gql } from "graphql-request";
import { GQL_ENDPOINT } from "../config";
import * as Crypto from "expo-crypto";

const Authentication: React.FC = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticateUser, { data, loading, error }] = useLazyQuery(
    LOGIN_QUERY,
    {
      context: {},
      headers: {
        "x-apollo-operation-name": "authenticateUser",
      },
    }
  );

  const dispatch = useDispatch();
  const { setToken } = authSlice.actions;

  useEffect(() => {
    if (!data) return;
    const token = data.authenticateUser;
    dispatch(setToken(token));
    // const decoded = decodeToken(token);
    // console.log(decoded);
    console.log(`useEffect auth: ${data}`);
    console.log(`useEffect auth: ${loading}`);
    console.log(`useEffect auth: ${error}`);
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
    }
  };

  const handleLogin = async () => {
    try {
      const result = await authenticateUser({
        variables: {
          input: { emailOrUsername: emailOrUsername, password: password },
        },
      });
      await request(GQL_ENDPOINT, LOGIN_QUERY, {
        input: { emailOrUsername: emailOrUsername, password: password },
      });
      console.log(`handleLogin: ${result}`);
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
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email or Username"
          onChangeText={(text) => setEmailOrUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <Pressable style={styles.submitButton} onPress={handleLogin}>
          <Text>Login</Text>
        </Pressable>
        {/* Display loading or error message */}
        {loading && <Text>Loading...</Text>}
        {error && <Text style={styles.errorText}>Error: {error.message}</Text>}
      </View>
    </SafeAreaView>
  );
};

export default Authentication;

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
