import { Route, Switch } from "wouter";
import { Home, Client } from "../../container";

function Screen() {
  return (
    <div className="App">
      <Switch>
       {localStorage? <Route path="/client/" component={Client} />:""}

        <Route
          path="/"
          component={!localStorage.getItem("userTK") ? Client : Home}
        />
        <Route>{!localStorage.getItem("userTK") ? <Home /> : <Client />}</Route>
      </Switch>
    </div>
  );
}

export default Screen;
