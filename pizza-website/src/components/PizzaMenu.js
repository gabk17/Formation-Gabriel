import React from 'react';
import { DATA } from '../Data';
import { background } from '../assets/index';
import ColoredLine from './ColoredLine';
import CardItem from './CardItem';

function PizzaMenu() {
  
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <div className="container py-4 bg-white">
        <div className="row">
          <div className="col-12 text-center">
            <ColoredLine color="red" />
            <h1 className="display-2">Pizza Menu</h1>
            <ColoredLine color="red" />
          </div>
        </div>
      </div>
      <div className="container" style={{ backgroundColor: 'white' }}>
        <div className="row justify-content-around">
          {DATA.map(CardItem)}
        </div>
      </div>
    </div>
  );
}

export default PizzaMenu;

