import { Route, Switch } from "wouter";
import { Home, Client } from "../../container";
function Screen() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/client" component={Client} />
        <Route>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default Screen;
