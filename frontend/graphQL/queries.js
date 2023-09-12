import { gql } from "@apollo/client";

export const LOGIN_QUERY = gql`
  query AuthenticateUser($input: authenticationInput!) {
    authenticateUser(input: $input)
  }
`;

export const GET_PROFILE = gql`
  query {
    getProfilebyID {
      firstname
      lastname
      experience
      account_level
    }
    getUserByID {
      email
      username
    }
  }
`;
