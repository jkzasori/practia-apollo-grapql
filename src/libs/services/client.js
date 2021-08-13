import { gql } from "apollo-boost";

export const getListClients = gql`
  query getclient($page: Int, $perPage: Int) {
    clientsSearch(page: $page, perPage: $perPage) {
      currentPage
      totalPages
      resultsPerPage
      results {
        id
        lastName
        cedula
        address
        firstName
        cellphone
        state {
          id
          name
          cities {
            name
            id
          }
        }
      }
    }
  }
`;

export const getStateList = gql`
  query getStates {
    states {
      id
      name
      cities {
        name
        id
      }
    }
  }
`;

export const createClient = gql`
  mutation postCreateClient($input: ClientInput!) {
    createClient(input: $input) {
      __typename
      ... on Client {
        id
        registerDate
        firstName
        lastName
        cedula
        address
        state {
          id
          name
          cities {
            id
            name
          }
        }
      }

      ... on ValidationErrors {
        message
      }
    }
  }
`;

export const editClient = gql`
  mutation putUpdateClient($id: Int!, $input: ClientInput!) {
    updateClient(input: $input, id: $id) {
      __typename
      ... on Client {
        id
        registerDate
        firstName
        lastName
        cedula
        address
        city
        state {
          id
          name
          cities {
            id
            name
          }
        }
      }

      ... on ValidationErrors {
        message
      }
    }
  }
`;

const service = {
  getListClients,
  getStateList,
  createClient,
  editClient,
};

export default service;
