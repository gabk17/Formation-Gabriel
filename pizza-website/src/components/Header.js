import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import 'react-notifications-component/dist/theme.css';
import { ReactNotifications, Store } from 'react-notifications-component';

import CartIcon from './CartIcon';
import { resetOrder } from './redux/actions/placeOrder';

function Header() {

  const dispatch = useDispatch();
  const isOrderPlaced = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(resetOrder());
    if (isOrderPlaced === true) {
      window.scrollTo(0, 0);
      doNotification();

    }
  })

  const doNotification = () => {
    Store.addNotification({
      title: "Great News!",
      message: "Your order has been successfully placed! Click to dismiss",
      type: "danger",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 12000,
        onScreen: true
      }
    });
  }

  return (
    <>
      <ReactNotifications />

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid py-2">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <NavLink className="navbar-brand mx-auto fw-bold" to="/">PIZZA GABRIELLO</NavLink>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/menu">Pizzas</NavLink>
              </li>
              <li className="nav-item">
                <CartIcon />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
