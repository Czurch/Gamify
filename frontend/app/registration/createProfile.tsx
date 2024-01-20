import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import SubmitButton from "../../components/common/SubmitButton";
import {
  CREATE_PROFILE,
  REGISTER_USER,
  RegisterUserMutation,
} from "../../graphQL/mutations";
import {
  GET_PROFILE,
  GetProfileQuery,
  LOGIN_QUERY,
  LoginQuery,
} from "../../graphQL/queries";
import client from "../../graphQL/client";
import authSlice from "../../store/reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";
import { MQStore, Profile, User } from "../../constants/interfaces";
import userSlice from "../../store/reducers/userReducer";
import profileSlice from "../../store/reducers/profileReducer";

interface CreateUserResult {
  createUser: User;
}

interface LoginResult {
  authenticateUser: string;
}

const CreateProfile: React.FC = () => {
  const router = useRouter();
  const [errorText, setErrorText] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { setToken } = authSlice.actions;
  const { setProfile } = profileSlice.actions;

  const storedToken = useSelector((state: MQStore) => state.auth.token);
  const user: User = useSelector((state: { user }) => state.user);

  useEffect(() => {
    if (!profileData) {
      setLoading(false);
      return;
    }
    try {
      dispatch(setProfile(profileData));
      router.replace("home");
    } catch (error) {
      console.error("Error while dispatching on Profile Creation:", error);
    }
  }, [profileData]);

  const createProfile = async () => {
    try {
      const result = await client.request(
        CREATE_PROFILE,
        {
          input: {
            firstname: firstName,
            lastname: lastName,
          },
        },
        { Authorization: `${storedToken}` }
      );
      setProfileData(result["createProfile"]);
      //dispatch(setUser(result))
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
          placeholder="First Name"
          onChangeText={(text) => setFirstname(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          onChangeText={(text) => setLastname(text)}
        />

        <SubmitButton
          text="Log in"
          onPress={() => {
            createProfile();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateProfile;

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
