import { Link } from "wouter";
const LogOut = () => {
  return (
    <Link
      onClick={() => {
        localStorage.removeItem("userTK");
        
      }}
      to="/home"
    >
      Log out
    </Link>
  );
};

export default LogOut;
