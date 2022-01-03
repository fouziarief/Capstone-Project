import "./App.css";

import "bootstrap/dist/css/bootstrap.css";
import Home from "./component/NavBar/Home";
import Recipe from "./component/NavBar/Recipe";
import Signup from "./component/NavBar/Signup";

import NavBar from "./component/NavBar/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Recipe" component={Recipe} />
          <Route exact path="/Signup" component={Signup} />
        </Switch>

        {/* <Recipe /> */}
        {/* <Signup /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
