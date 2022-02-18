
import Home from './components/Home'
import Header from './components/Header'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import PizzaMenu from './components/PizzaMenu'
import PizzaDetail from './components/PizzaDetail'

import { Route, Switch, Redirect } from 'react-router-dom'
import "./components/fontAwesome/index"

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={PizzaMenu} />
        <Route exact path="/menu/:id" component={PizzaDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />

        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
