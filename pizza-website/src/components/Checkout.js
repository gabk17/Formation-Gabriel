import { useSelector } from 'react-redux';

const Checkout = () => {

  const cartCount = useSelector((state) => state.pizza);
  let total = 0;
  let tva = 22.4;

  const cartList = (item) => {

    total = total + item.price;

    return (
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 className="my-0">{item.title}</h6>
        </div>
        <span className="text-muted">${item.price}</span>
      </li>
    );
  }

  return (
    <div className="container my-5">
      <div className="row g-5 d-flex justify-content-center">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-danger">Your cart</span>
            <span className="badge bg-danger rounded-pill">{cartCount.length}</span>
          </h4>
          <ul className="list-group mb-3">
            {cartCount.map(cartList)}
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>${total}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>TVA</span>
              <strong>22.4%</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>TTC (USD)</span>
              <strong>${Math.round((total + total * tva / 100)*100)/100}</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
