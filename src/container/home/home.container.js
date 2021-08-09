import { useEffect } from "react";
import { Login, GeneralInformation } from "../../components";
import { HomeContainer } from "./styles";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Redirect } from "wouter";

const LOGIN = gql`
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
const Home = () => {
  const [login, { loading, error, data }] = useMutation(LOGIN);
  const redirect = (token) => {
    if (token) {
      return <Redirect to="/client/" />;
    } else {
      return "";
    }
  };
  useEffect(() => {
    if (data?.login?.token) {
      localStorage.setItem("userTK", JSON.stringify(data?.login?.token));
    }
  }, [data]);
  
  return (
    <HomeContainer>{redirect(data?.login?.token)}
      <GeneralInformation
        logo
        title={"Welcome to Elenas Frontend test"}
        description={
          "This is a test to get a job in Elenas as a Frontend developer"
        }
      />
      {loading ? (
        "Submitting..."
      ) : error ? (
        "Something was wrong, try again"
      ) : (
        <Login funcLogin={login} />
      )}
    </HomeContainer>
  );
};

export default Home;
