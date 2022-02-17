
import Home from './components/Home'
import Header from './components/Header'
import PizzaMenu from './components/PizzaMenu'
import { Route, Switch, Redirect } from 'react-router-dom'
import "./components/fontAwesome/index"

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={PizzaMenu} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
