import React from 'react';
import { DATA } from '../Data';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import { background } from '../assets/index';
import ColoredLine from './ColoredLine';

function PizzaMenu() {
  const cardItem = (item) => {
    return (
      <Card style={{ width: '21rem', marginBottom: '3rem' }}>
        <Card.Img style={{ marginTop: '1rem' }} variant="top" src={item.img} alt={item.title} />
        <Card.Body>
          <Card.Title className="itemTitle">{item.title}, ${item.price}</Card.Title>
          <Card.Text className="description">
            {item.description}
          </Card.Text>
          <div className="d-grid gap-2">
            <NavLink to={`/menu/${item.id}`} class="btn btn-outline-danger">Add to Cart</NavLink>
          </div>
        </Card.Body>
      </Card>
    )
  }
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
          {DATA.map(cardItem)}
        </div>
      </div>
    </div>
  );
}

export default PizzaMenu;

