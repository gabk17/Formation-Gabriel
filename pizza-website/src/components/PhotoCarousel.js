import Carousel from 'react-bootstrap/Carousel';
import { image1, image2, image3 } from '../assets/index';

const PhotoCarousel = () => {

  const DATA = [
    {
      id: "0",
      alt: "First slide",
      img: image1
    },
    {
      id: "1",
      alt: "Second slide",
      img: image2
    },
    {
      id: "2",
      alt: "Third slide",
      img: image3
    },
  ]

  const carouselTemplate = (item) => (
    <Carousel.Item key={item.id}>
      <img
        className="d-block w-100"
        src={item.img}
        alt={item.alt}
      />
    </Carousel.Item>
  )

  return (
    <div>
      <Carousel fade>
        {DATA.map(carouselTemplate)}
      </Carousel>
    </div>
  )
}

export default PhotoCarousel