import { Route, Switch, Redirect } from 'react-router-dom';
// import Reactotron from 'reactotron-react-js'

import Home from '../containers/Home';
import Cart from '../containers/Cart';
import "../utils/fontAwesome/index";
import Header from '../components/Header';
import PizzaMenu from '../containers/PizzaMenu';
import PizzaDetail from '../containers/PizzaDetail';


function App() {
  return (
    <>
      {/* {Reactotron.display({
  name: 'KNOCK KNOCK',
  preview: 'Who\'s there?',
  value: 'Orange.'
})} */}

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
