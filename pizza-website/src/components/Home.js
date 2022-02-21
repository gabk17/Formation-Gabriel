import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import 'react-notifications-component/dist/theme.css';
import { ReactNotifications, Store } from 'react-notifications-component';

import About from './About';
import ColoredLine from './ColoredLine';
import { image1, image2, image3 } from '../assets/index';

function Home() {

  const isOrderPlaced = useSelector((state) => state.order);

  useEffect(() => {
    if (isOrderPlaced === true) {
      window.scrollTo(0, 0);
      doNotification();
    }
  }, [])

  const doNotification = () => {
    Store.addNotification({
      title: "Great News!",
      message: "Your order has been successfully placed! Click to dismiss",
      type: "danger",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 12000,
        onScreen: true
      }
    });
  }

  return (
    <div>
      <ReactNotifications />

      <ColoredLine color="red" />
      <div className="d-flex justify-content-center" >
        <blockquote className="blockquote">
          <h1 className="display-1 fw-bold">Un Autentico Gusto Italiano</h1>
          <footer className="blockquote-footer font-italic">Chef Gabriello Kanaano</footer>
        </blockquote>
      </div>
      <ColoredLine color="red" />

      <div>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image3}
              alt="Third slide"
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
