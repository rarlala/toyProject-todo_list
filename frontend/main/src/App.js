import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import RarlaTodo from "./RarlaTodo";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/rarla" component={RarlaTodo} />
      <Route exact path="/homes" />
    </Router>
  );
}

export default App;
