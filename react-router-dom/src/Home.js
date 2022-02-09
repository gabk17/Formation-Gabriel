import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Here's A Home Page, <Link to="/list">Go to List Page</Link></h2>
    </div>
  )
}

export default Home;