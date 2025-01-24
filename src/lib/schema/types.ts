import {gql} from "graphql-tag";

export const typeDefs = gql`
  enum Role {
    USER
    ADMIN
  }

  type User {
    id: Int!
    createdAt: String!
    updatedAt: String!
    email: String
    image: String
    role: Role!
    bookmarks: [Link!]!
  }

  type Link {
    id: Int!
    createdAt: String!
    updatedAt: String!
    title: String!
    description: String!
    url: String!
    imageUrl: String!
    category: String!
    users: [User!]!
  }

  type Query {
    users: [User!]!
    links: [Link!]!
  }

  type Mutation {
    createUser(email: String!, image: String, role: Role): User!
    createLink(title: String!, description: String!, url: String!, imageUrl: String!, category: String!): Link!
  }
`;