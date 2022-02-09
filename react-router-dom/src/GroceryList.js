import { Link } from "react-router-dom";

const GroceryList = ({groceries}) => {

  return (
    <div className="grocery-list">
      {groceries.map((grocery) => (
        <div className="grocery-preview" key={grocery.id}>
          <Link to={`/grocery/${grocery.amount}`}>
            <h2>{ grocery.brand }</h2>
            <p>Food / Beverage: <strong><em>{grocery.details}</em></strong></p>
            <h4>Click for more Details</h4>
          </Link>          
        </div>
      ))}
    </div>
  );
}

export default GroceryList;