import { useState } from "react";
import { LoginFormContainer } from "./style.login";
const Login = ({ funcLogin }) => {
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  return (
    <LoginFormContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          funcLogin({ variables: { cellphone: user, password: password } });
        }}
      >
        <div>
          <label>User</label>
          <input
            defaultValue={user}
            type="text"
            placeholder="user"
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            defaultValue={password}
            type="password"
            placeholder="password"
            autoComplete="login-password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button disabled={user === "" || password === ""}>Login</button>
      </form>
    </LoginFormContainer>
  );
};

export default Login;
