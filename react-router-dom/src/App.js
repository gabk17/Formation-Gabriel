import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home"
import List from './List';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hey</h1>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/list">
              <List />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
