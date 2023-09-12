import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import SubmitButton from "../../components/common/SubmitButton";
import { REGISTER_USER } from "../../graphQL/mutations";
import { LOGIN_QUERY } from "../../graphQL/queries";
import client from "../../client";
import authSlice from "../../store/reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../constants/interfaces";
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
  const [errorText, setErrorText] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [userData, setUserData] = useState({ id: "", username: "", email: "" });
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { setToken } = authSlice.actions;
  const { setUser } = userSlice.actions;
  const { setProfile } = profileSlice.actions;

  const storedToken = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (!userData.id) return;
    handleLogin();
  }, [userData]);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const result: LoginResult = await client.request(
        LOGIN_QUERY,
        {
          input: { emailOrUsername: email, password: password },
        },
        { Authorization: storedToken ? `Bearer ${storedToken}` : "" }
      );
      console.log("The log in worked!");
      const token = result.authenticateUser;
      dispatch(setToken(token));
      console.log("Token Dispatched");
      dispatch(setProfile(userData));
      router.replace("/");
    } catch (e) {
      console.error(e.message);
    }
  };

  const handleRegister = async () => {
    //maybe disable the register button instead
    if (!email || !username || !password || !verifyPassword) return;
    if (password !== verifyPassword) {
      setErrorText("Passwords Don't match");
      return;
    }
    setErrorText("");
    //check if username or email already exists in db

    try {
      const result: CreateUserResult = await client.request(REGISTER_USER, {
        input: { email: email, username: username, password: password },
      });
      console.log(result);
      setUserData(result.createUser);
    } catch (e) {
      setErrorText(e.message.toString());
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
