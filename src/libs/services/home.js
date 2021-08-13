import { gql } from "apollo-boost";

export const LOGIN = gql`
  mutation login($cellphone: String!, $password: String!) {
    login(cellphone: $cellphone, password: $password) {
      __typename
      ... on AuthInfo {
        token
        user {
          id
          firstName
          lastName
        }
      }
      ... on ValidationErrors {
        message
      }
    }
  }
`;

const service = {
  LOGIN,
};
export default service;
