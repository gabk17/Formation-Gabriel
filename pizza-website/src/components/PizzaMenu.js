import { DATA } from '../Data';
import CardItem from './CardItem';
import MenuTitle from './MenuTitle';
import { background } from '../assets/index';

function PizzaMenu() {
  
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <MenuTitle />
      <div className="container" style={{ backgroundColor: 'white' }}>
        <div className="row justify-content-around">
          {DATA.map(CardItem)}
        </div>
      </div>
    </div>
  );
}

export default PizzaMenu;
