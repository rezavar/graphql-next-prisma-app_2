import {gql} from "@apollo/client";

export const GET_LINKS = gql`
  query GetLinks {
    links {
      id
      title
      description
      url
      imageUrl
      category
      createdAt
    }
  }
`;

