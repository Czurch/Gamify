import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SafeAreaView, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { GET_PROFILE, LOGIN_QUERY } from "../graphQL/queries";
import authSlice from "../store/reducers/authReducer";
import * as Crypto from "expo-crypto";
import client from "../client";
import LoginForm from "../components/forms/login";
import profileSlice from "../store/reducers/profileReducer";
import userSlice from "../store/reducers/userReducer";

const Login: React.FC = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const userAuth = useSelector((state: { auth }) => state.auth);
  const profile = useSelector((state: { profile }) => state.profile);
  const user = useSelector((state: { user }) => state.user);
  const { setToken } = authSlice.actions;
  const { setProfile } = profileSlice.actions;
  const { setUser } = userSlice.actions;

  useEffect(() => {
    if (!data) {
      setLoading(false);
      return;
    }
    const token = data.authenticateUser;
    const handleRequest = async (token) => {
      try {
        const result = requestUserAndProfile(token);
      } catch (e) {
        console.error(e.message);
      }
    };
    handleRequest(token);
  }, [data]);

  useEffect(() => {
    if (!profileData) {
      setLoading(false);
      return;
    }
    try {
      dispatch(setProfile(profileData.getProfilebyID));
      dispatch(setUser(profileData.getUserByID));
      dispatch(setToken(data.authenticateUser));
    } catch (error) {
      console.error("Error while dispatching on Log in:", error);
    }
  }, [profileData]);

  const requestUserAndProfile = async (token) => {
    try {
      const result = await client.request(
        GET_PROFILE,
        {},
        { Authorization: `${token}` }
      );
      setProfileData(result);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const result = await client.request(LOGIN_QUERY, {
        input: { emailOrUsername: emailOrUsername, password: password },
      });
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
