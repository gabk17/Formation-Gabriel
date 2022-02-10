import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Grocery App</h1>
      <div className="links">
        <Link exact to="/">Home</Link>
        <Link exact to="/list">List</Link>
      </div>
    </nav>
  );
}

export default Navbar;
