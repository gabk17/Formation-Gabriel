import { useParams } from "react-router-dom";

const GroceryDetails = () => {
  const { amount } = useParams();

  return(
    <div className="grocery-details">
      <h2>Grocery Details - Amount: { amount }</h2>
    </div>
  );
}

export default GroceryDetails;