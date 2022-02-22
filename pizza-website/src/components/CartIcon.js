import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartIcon = () => {

  let total = 0;

  const cartObjectArray = useSelector((state) => state.pizza);
  const cartQuantityArray = cartObjectArray.map(e => e.quantity);

  for (let i = 0; i < cartQuantityArray.length; i++) {
    total += parseInt(cartQuantityArray[i]);
  }

  return (
    <>
      <NavLink to="/cart" className="btn btn-outline-danger ms-2 cart">
        My Cart
        <FontAwesomeIcon icon="fa-solid fa-pizza-slice" className="ml-2" /> {total}
      </NavLink>
    </>
  );
}

export default CartIcon;
