import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation RegisterUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      username
    }
  }
`;

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
