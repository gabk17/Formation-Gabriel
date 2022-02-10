import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from "./List";
import Navbar from "./Navbar";
import GroceryDetails from './GroceryDetails';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/list">
              <List />
            </Route>
            <Route path="/grocery/:amount">
              <GroceryDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
