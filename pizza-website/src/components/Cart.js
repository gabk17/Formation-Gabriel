import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Checkout from './Checkout';
import ColoredLine from './ColoredLine';
import { placeOrder } from './redux/actions/placeOrder';
import { delPizza, reset } from './redux/actions/index';

function Cart() {

  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.pizza);

  const handleClose = (item) => {
    dispatch(delPizza(item));
  }

  const sendOrder = () => {
    dispatch(placeOrder());
    dispatch(reset());
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
    );
  }

  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light" key={cartItem.id}>
        <div className="container py-3">
          <button className="btn-close float-end mr-5" aria-label="Close" onClick={() => handleClose(cartItem)} />
          <div className="row justify-content-center d-flex align-items-center">
            <div className="col-md-3">
              <img src={cartItem.img} alt={cartItem.title} height="200" width="180" />
            </div>
            <div className="col-md-3">
              <ColoredLine color="red" />
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold">${cartItem.price}</p>
              <ColoredLine color="red" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  
  const checkoutButton = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink to="/home" className="btn btn-outline-danger mb-5 w-25 mx-auto" onClick={sendOrder}>Place an Order</NavLink>
        </div>
      </div>
    );
  }
  
  const showCart = () => {
    return (
      <>
        {cartCount.map(cartItems)} 
        <Checkout />
        {checkoutButton()}
      </>
    )
  }

  return (
    <div>
      {cartCount.length === 0 ? emptyCart() : showCart()}
    </div>
  );
}

export default Cart;
