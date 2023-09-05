import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation Mutation($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      username
    }
  }
`;
