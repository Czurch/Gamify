import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { CREATE_PROFILE } from "../../graphQL/mutations";
import client from "../../client";
import SubmitButton from "../common/SubmitButton";

interface CreateProfileProps {
  userData: { id; username };
}

const CreateProfileForm: React.FC<CreateProfileProps> = ({ userData }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [errorText, setErrorText] = useState("");
  const createProfile = async () => {
    try {
      const result = await client.request(CREATE_PROFILE, {
        input: {
          user_id: userData.id,
          username: userData.username,
          firstname: firstname,
          lastname: lastname,
        },
      });
      console.log(result);
      //dispatch(setUser(result))
    } catch (e) {
      setErrorText(e.message.toString());
      console.error(e.message);
    }
  };

  return (
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
        secureTextEntry={true}
        onChangeText={(text) => setLastname(text)}
      />

      <SubmitButton
        text="Log in"
        onPress={() => {
          createProfile();
        }}
      />
    </View>
  );
};

export default CreateProfileForm;

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
