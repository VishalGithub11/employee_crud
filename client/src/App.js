import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import EmployeeList from "./EmployeeList";
import Home from "./Home";
import AddEmp from "./AddEmp";
import Edit from "./Edit";
import Signup from "./Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/home" component={Home} />
          <Route path="/edit" component={Edit} />
          <Route path="/addempl" component={AddEmp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
