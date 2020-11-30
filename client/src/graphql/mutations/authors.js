import { gql } from "@apollo/client";

export const ADD_AUTHOR = gql`
  mutation($name: String!, $age: Int!) {
    addAuthor(name: $name, age: $age) {
      name
    }
  }
`;
