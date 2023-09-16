import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import SubmitButton from "../../components/common/SubmitButton";
import { REGISTER_USER, RegisterUserMutation } from "../../graphQL/mutations";
import { GET_PROFILE, LOGIN_QUERY, LoginQuery } from "../../graphQL/queries";
import client from "../../graphQL/client";
import authSlice from "../../store/reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";
import { MQStore, User } from "../../constants/interfaces";
import userSlice from "../../store/reducers/userReducer";
import profileSlice from "../../store/reducers/profileReducer";

interface CreateUserResult {
  createUser: User;
}

interface LoginResult {
  authenticateUser: string;
}

const CreateAccount: React.FC = () => {
  const router = useRouter();
  const [auth, setAuth] = useState(null);
  const [errorText, setErrorText] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [userData, setUserData] = useState({ id: "", username: "", email: "" });
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { setToken } = authSlice.actions;
  const { setUser } = userSlice.actions;
  const { setProfile } = profileSlice.actions;

  const storedToken = useSelector((state: MQStore) => state.auth.token);

  useEffect(() => {
    if (!userData.id) return;
    handleLogin();
    const handleRequest = async (token) => {
      try {
        const result = requestUserAndProfile(token);
      } catch (e) {
        console.error(e.message);
      }
    };
    handleRequest(auth);
  }, [userData]);

  useEffect(() => {
    if (!profileData) {
      setLoading(false);
      return;
    }
    try {
      dispatch(setProfile(profileData.getProfilebyID));
      dispatch(setUser(profileData.getUserByID));
      dispatch(setToken(storedToken));
    } catch (error) {
      console.error("Error while dispatching on Log in:", error);
    }
  }, [profileData]);

  const requestUserAndProfile = async (token) => {
    console.log(`request token: ${token}`);
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
    const result = await LoginQuery(email, password, setLoading);
    setAuth(result);
  };

  const handleRegister = async () => {
    const result = await RegisterUserMutation(
      email,
      username,
      password,
      verifyPassword,
      setErrorText
    );
    setUserData(result);
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
        <Text style={styles.errorText}>{errorText}</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Re-Enter Password"
          secureTextEntry={true}
          onChangeText={(text) => setVerifyPassword(text)}
        />
        <SubmitButton
          text="Register"
          onPress={() => {
            handleRegister();
          }}
        />
        <Text>Already have an account?</Text>

        <SubmitButton
          text="Log in"
          onPress={() => {
            router.back();
          }}
        />
        {loading && <Text>Loading...</Text>}
      </View>
    </SafeAreaView>
  );
};

export default CreateAccount;

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
