import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Cart() {
  return (
    <>
      <NavLink to="/cart" className="btn btn-outline-danger ms-2 cart">
        My Cart
        <FontAwesomeIcon icon="fa-solid fa-pizza-slice" className="ml-2" />
      </NavLink>
    </>
  )
}

export default Cart;
