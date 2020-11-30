import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  {
    books {
      name
      id
      author {
        name
      }
    }
  }
`;
