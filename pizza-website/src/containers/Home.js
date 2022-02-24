import About from '../components/About';
import ColoredLine from '../components/ColoredLine';
import PhotoCarousel from '../components/PhotoCarousel';

function Home() {

  return (
    <div>
      <ColoredLine color="red" />
      <div className="d-flex justify-content-center" >
        <blockquote className="blockquote">
          <h1 className="display-1 fw-bold">Un Autentico Gusto Italiano</h1>
          <footer className="blockquote-footer font-italic">Chef Gabriello Kanaano</footer>
        </blockquote>
      </div>
      <ColoredLine color="red" />

      <div>
        {PhotoCarousel()}
      </div>

      <ColoredLine color="red" />
      <About />
      <ColoredLine color="red" />

    </div>

  );
}

export default Home;
