import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

const CardItem = (item) =>
(
  <Card key={item.id} style={{ width: '25rem', marginBottom: '3rem' }}>
    <Card.Img style={{ marginTop: '1rem' }} variant="top" src={item.img} alt={item.title} />
    <Card.Body>
      <Card.Title>{item.title}, ${item.price}</Card.Title>
      <Card.Text className="description">
        {item.size}
      </Card.Text>
      <div className="d-grid gap-2">
        <NavLink to={`/menu/${item.id}`} className="btn btn-outline-danger">Check Item Details</NavLink>
      </div>
    </Card.Body>
  </Card>
);


export default CardItem;
