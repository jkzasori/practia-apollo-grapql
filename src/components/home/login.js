import { useState } from "react";
import { LoginFormContainer } from "./style.login";
const Login = () => {
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  return (
    <LoginFormContainer>
      <form>
        <div>
          <label>User</label>
          <input
            defaultValue={user}
            type="text"
            placeholder="user"
            onClick={(e) => setUser(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            defaultValue={password}
            type="password"
            placeholder="password"
            autoComplete='login-password'
            onClick={(e) => setPassword(e.target.value)}
          />
        </div>

        <button>Login</button>
      </form>
    </LoginFormContainer>
  );
};

export default Login;
