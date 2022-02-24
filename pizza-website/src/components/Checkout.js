import { useSelector } from 'react-redux';

const Checkout = () => {

  let totalSum = 0;
  let totalCount = 0;
  const tva = 22.4;
  
  const cartObjectArray = useSelector((state) => state.pizza);
  const cartQuantityArray = cartObjectArray.map(e => e.quantity);

  for (let i = 0; i < cartQuantityArray.length; i++) {
    totalCount += parseInt(cartQuantityArray[i]);
  }

  const cartList = (item) => {

    totalSum = totalSum + (item.price * item.quantity);

    return (
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 className="my-0">{item.title}: ${item.price}</h6>
          <div>
            <p className="my-0">Quantity: {item.quantity}</p>
          </div>
        </div>
        <span className="text-muted d-flex align-items-center">${item.price * item.quantity}</span>
      </li>
    );
  }

  return (
    <div className="container my-5">
      <div className="row g-5 d-flex justify-content-center">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-danger">Your cart</span>
            <span className="badge bg-danger rounded-pill">{totalCount}</span>
          </h4>
          <ul className="list-group mb-3">
            {cartObjectArray.map(cartList)}
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>${totalSum}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>TVA</span>
              <strong>22.4%</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>TTC (USD)</span>
              <strong>${Math.round((totalSum + totalSum * tva / 100)*100)/100}</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
