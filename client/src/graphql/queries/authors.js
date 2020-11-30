import { gql } from "@apollo/client";

export const GET_AUTHORS = gql`
  {
    authors {
      name
    }
  }
`;
