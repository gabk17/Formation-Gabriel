import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { delPizza } from './redux/actions/index';

function Cart() {

  const dispatch = useDispatch()
  const cartCount = useSelector(state => state.pizza)

  const handleClose = (item) => {
    dispatch(delPizza(item));
  }

  const emptyCart = () => { 
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>
              Your Cart is Empty
            </h3>
          </div>
        </div>
      </div>
    )
  }

  const cartItems = (cartItem) => {
    return(
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button className="btn-close float-end" aria-label="Close" onClick={() => handleClose(cartItem)} />
          <div className="row justify-content-center">
          <div className="col-md-4">
            <img src={cartItem.img} alt={cartItem.title} height="200" width="180"/>
          </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold">${cartItem.price}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const checkoutButton = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink to="/checkout" className="btn btn-outline-danger mb-5 w-25 mx-auto">Proceed To Checkout</NavLink>
        </div>
      </div>
    )
  }

  return (
    <div>
      {cartCount.length === 0 && emptyCart()}
      {cartCount.length !== 0 && cartCount.map(cartItems)}
      {cartCount.length !== 0 && checkoutButton()}

    </div>
  )
}

export default Cart