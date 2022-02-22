import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { DATA } from '../Data';
import MenuTitle from './MenuTitle';
import ColoredLine from './ColoredLine';
import { background } from '../assets/index';
import { addPizza, delPizza } from './redux/actions/index';

function PizzaDetail() {

  // DATA.filter((e) => {
  //   console.log(e, pizzaID, e.id === pizzaID);
  //   return e.id === pizzaID;
  // }) 
  // Debugs the Filtering of DATA content, and conditioning of e.id === pizzaID

  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const [chosenQuantity, setChosenQuantity] = useState("1")
  const dispatch = useDispatch()
  const pizzaID = useParams();
  const pDetail = DATA.filter((e) => e.id === pizzaID.id)
  const pizza = pDetail[0];

  const handleCart = (pizza, quantity) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addPizza(pizza, quantity));
      setCartBtn("Remove from Cart")
    }
    else {
      dispatch(delPizza(pizza, quantity))
      setCartBtn("Add to Cart")
    }
  }

  const handleSelect = (e) => {
    setChosenQuantity(e)
  }

  return (

    <div style={{ backgroundImage: `url(${background})` }}>
      <MenuTitle />
      <div className="container bg-white">
        <div className="row">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center">
              <img src={pizza.img} alt={pizza.title} height="500" />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h1 className="display-5 fw-bold">{pizza.title}</h1>
              <hr />
              <h2 className="my-4">${pizza.price}</h2>
              <p className="lead">{pizza.description}</p>
              <DropdownButton
                title="Choose Quantity"
                onSelect={handleSelect}
              >
                <Dropdown.Item eventKey="1">1</Dropdown.Item>
                <Dropdown.Item eventKey="2">2</Dropdown.Item>
                <Dropdown.Item eventKey="3">3</Dropdown.Item>
                <Dropdown.Item eventKey="4">4</Dropdown.Item>
                <Dropdown.Item eventKey="5">5</Dropdown.Item>
                <Dropdown.Item eventKey="6">6</Dropdown.Item>
                <Dropdown.Item eventKey="7">7</Dropdown.Item>
                <Dropdown.Item eventKey="8">8</Dropdown.Item>
                <Dropdown.Item eventKey="9">9</Dropdown.Item>

              </DropdownButton>
              <h4 className="mt-4">Quantity: {chosenQuantity}</h4>
              <button className="btn btn-outline-danger my-4" onClick={() => handleCart(pizza, chosenQuantity)}>{cartBtn}</button>
              <hr />
            </div>
          </div>
        </div>
        <div className="pt-4">
          <ColoredLine color="red" />
        </div>
      </div>
    </div>

  )
}

export default PizzaDetail

