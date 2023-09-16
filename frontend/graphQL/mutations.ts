import { gql } from "apollo-server-express";
import client from "./client";
import { User } from "../constants/interfaces";

export const REGISTER_USER = gql`
  mutation RegisterUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      username
    }
  }
`;

interface CreateUserResult {
  createUser: User;
}
export const RegisterUserMutation = async (
  email,
  username,
  password,
  verifyPassword,
  setErrorText
) => {
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
    return result.createUser;
  } catch (e) {
    console.error(e.message);
    setErrorText(e.message.toString());
    return e.message.toString();
  }
};

export const CREATE_PROFILE = gql`
  mutation CreateProfile($input: CreateProfileInput!) {
    createProfile(input: $input) {
      firstname
      lastname
      profile_id
      account_level
      experience
    }
  }
`;
