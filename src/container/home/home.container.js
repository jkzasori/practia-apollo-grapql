import { useEffect } from "react";
import { Login, GeneralInformation } from "../../components";
import { HomeContainer } from "./styles";
import { useLocation } from "wouter";
import { useMutation } from "@apollo/react-hooks";
import { homeService } from "../../libs/services";

const Home = () => {
  const [login, { loading, error, data }] = useMutation(homeService.LOGIN);
  const [, setLocation] = useLocation();
  const redirect = (token) => {
    if (token) {
      setLocation("/client/");
    }
  };

  useEffect(() => {
    if (data?.login?.token) {
      localStorage.setItem("userTK", JSON.stringify(data?.login?.token));
    }
  }, [data]);

  return (
    <HomeContainer>
      {redirect(data?.login?.token)}
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
