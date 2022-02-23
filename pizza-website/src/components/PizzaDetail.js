import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

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

  const [cartBtn, setCartBtn] = useState("Add Quantity to Cart");
  const [chosenQuantity, setChosenQuantity] = useState(1)
  const dispatch = useDispatch()
  const pizzaID = useParams();
  const pDetail = DATA.filter((e) => e.id === pizzaID.id)
  const pizza = pDetail[0];

  const handleCart = (pizza, quantity) => {
    if (cartBtn === "Add Quantity to Cart") {
      dispatch(addPizza(pizza, quantity));
      setCartBtn("Remove All from Cart")
    }
    else {
      dispatch(delPizza(pizza, quantity))
      setCartBtn("Add Quantity to Cart")
    }
  }

  const handleIncrement = () => {
    setChosenQuantity(chosenQuantity + 1)
  }

  const handleDecrement = () => {
    if (chosenQuantity === 1) return
    setChosenQuantity(chosenQuantity - 1)
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
              <div className="d-flex flex-column justify-content-center">
                <button onClick={handleIncrement} className="btn btn-outline-danger my-1">Add a Pizza!</button>
                <button onClick={handleDecrement} className="btn btn-outline-danger my-1">Remove a Pizza</button>
              </div>
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

