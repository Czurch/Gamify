import { gql } from "@apollo/client";

export const LOGIN_QUERY = gql`
  query ($input: authenticationInput!) {
    authenticateUser(input: $input)
  }
`;
