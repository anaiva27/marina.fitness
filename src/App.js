import { useEffect } from "react";
import "./App.css";
import { Routes } from "./Routes";
import Footer from "./Footer";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { Retreat } from "./Retreat/Retreat";

function App() {
  return (
    // <div className="App">
    <Router>
      <Switch>
        <Route path="/retreat" component={Retreat} />
        <Route path="/" component={Routes} />
        <Route path="*" component={<Redirect />} />
      </Switch>
    </Router>
    // </div>
  );
}

export default App;

const Redirect = () => {
  const history = useHistory();
  // const navigate = useNavigate();
  useEffect(() => {
    // navigate("/");
    history.pushState("/");
  }, []);
  return null;
};
