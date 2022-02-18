import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';

const CartIcon = () => {

  const cartCount = useSelector(state => state.pizza)

  return (
    <>
      <NavLink to="/cart" className="btn btn-outline-danger ms-2 cart">
        My Cart
        <FontAwesomeIcon icon="fa-solid fa-pizza-slice" className="ml-2" /> {cartCount.length}
      </NavLink>
    </>
  )
}

export default CartIcon;
