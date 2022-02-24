import { DATA } from '../utils/Data';
import CardItem from '../components/CardItem';
import MenuTitle from '../components/MenuTitle';
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
