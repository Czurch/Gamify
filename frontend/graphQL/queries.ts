import { gql } from "@apollo/client";
import client from "./client";

export const LOGIN_QUERY = gql`
  query AuthenticateUser($input: authenticationInput!) {
    authenticateUser(input: $input)
  }
`;

export const LoginQuery = async (emailOrUsername, password, setLoading) => {
  setLoading(true);
  try {
    const result = await client.request(LOGIN_QUERY, {
      input: { emailOrUsername: emailOrUsername, password: password },
    });
    return result;
  } catch (e) {
    console.error(e.message);
  }
};

export const GET_PROFILE = gql`
  query GetUserAndProfile {
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

export const GetProfileQuery = async (token) => {
  try {
    const result = await client.request(
      GET_PROFILE,
      {},
      { Authorization: `${token}` }
    );
    return result;
  } catch (error) {
    console.error(error.message);
  }
};
