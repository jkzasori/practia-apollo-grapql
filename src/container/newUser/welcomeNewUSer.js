import { Link } from "wouter";
import { UserContainer } from "./style";

const WelcomeNewUSer = () => {
  return (
    <UserContainer>
      <Link to="/client">Go back</Link>
      <h5>New user was created successfully!</h5>
    </UserContainer>
  );
};
export default WelcomeNewUSer;
