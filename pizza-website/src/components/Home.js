import React from 'react'
import { image1, image2, image3 } from '../assets/index';
import Carousel from 'react-bootstrap/Carousel';
import About from './About';
import ColoredLine from './ColoredLine';

function Home() {
  return (
    <div>
      <ColoredLine color="red" />
      <div className="d-flex justify-content-center" >
        <blockquote className="blockquote">
          <h1 className="display-1 fw-bold">Un Autentico Gusto Italiano</h1>
          <footer className="blockquote-footer">Chef Gabriello Kanaano</footer>
        </blockquote>

      </div>
      <ColoredLine color="red" />
      <div>
        <Carousel fade>
          <Carousel.Item>
            <img
              classNameName="d-block w-100"
              src={image1}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              classNameName="d-block w-100"
              src={image2}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              classNameName="d-block w-100"
              src={image3}
              alt="Fourth slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <ColoredLine color="red" />
      <About />
      <ColoredLine color="red" />
    </div>

  );
}

export default Home;
