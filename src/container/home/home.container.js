import { Login, GeneralInformation } from "../../components";
import { HomeContainer } from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      <GeneralInformation
        logo
        title={"Welcome to Elenas Frontend test"}
        description={
          "This is a test to get a job in Elenas as a Frontend developer"
        }
      />
      <Login />
    </HomeContainer>
  );
};

export default Home;
