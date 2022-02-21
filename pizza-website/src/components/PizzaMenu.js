import React from 'react';
import { DATA } from '../Data';
import { background } from '../assets/index';
import MenuTitle from './MenuTitle';
import CardItem from './CardItem';

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
