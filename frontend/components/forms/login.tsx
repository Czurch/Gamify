import React, { Children, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { LinearGradient } from "expo-linear-gradient";
import { Quest } from "../../constants/interfaces";
import TextButton from "../common/TextButton";
import { useRouter } from "expo-router";

interface LoginFormProps {
  setEmailOrUsername: (string) => void;
  setPassword: (string) => void;
  handleLogin: () => void;
  loading: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({
  setEmailOrUsername,
  setPassword,
  handleLogin,
  loading,
}) => {
  const router = useRouter();
  return (
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

      <Text>Don't have an account?</Text>
      <Pressable
        style={styles.submitButton}
        onPress={() => {
          router.push("registration/createAccount");
        }}
      >
        <Text>Register</Text>
      </Pressable>

      {/* Display loading or error message */}
      {loading && <Text>Loading...</Text>}
    </View>
  );
};

export default LoginForm;

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
