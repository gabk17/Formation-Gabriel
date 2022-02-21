import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { DATA } from '../Data';
import MenuTitle from './MenuTitle';
import ColoredLine from './ColoredLine';
import { background } from '../assets/index';
import { addPizza, delPizza} from './redux/actions/index';

function PizzaDetail() {

  // DATA.filter((e) => {
  //   console.log(e, pizzaID, e.id === pizzaID);
  //   return e.id === pizzaID;
  // }) 
  // Debugs the Filtering of DATA content, and conditioning of e.id === pizzaID

  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const dispatch = useDispatch()
  const pizzaID = useParams();
  const pDetail = DATA.filter((e) => e.id === pizzaID.id)
  const pizza = pDetail[0];

  const handleCart = (pizza) =>{
    if(cartBtn === "Add to Cart"){
      dispatch(addPizza(pizza))
      setCartBtn("Remove from Cart")
    }
    else{
      dispatch(delPizza(pizza))
      setCartBtn("Add to Cart")
    }
  }

  return (

    <div style={{ backgroundImage: `url(${background})` }}>
      <MenuTitle/>
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
              <button className="btn btn-outline-danger my-5" onClick={() => handleCart(pizza)}>{cartBtn}</button>
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

