import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/Home';
import Cart from './components/Cart';
import "./components/fontAwesome/index";
import Header from './components/Header';
import PizzaMenu from './components/PizzaMenu';
import PizzaDetail from './components/PizzaDetail';


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={PizzaMenu} />
        <Route exact path="/menu/:id" component={PizzaDetail} />
        <Route exact path="/cart" component={Cart} />

        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
