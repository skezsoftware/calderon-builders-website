import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";
import WorkersWalking from "../../assets/workers-walking.jpg";
import Framing from "../../assets/framing.webp";
import HomeRemodel from "../../assets/home-remodel.png";


export default function CarouselImages() {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage src={WorkersWalking} text="First slide" />
        <Carousel.Caption>
          <h3>Expert Commercial Builds</h3>
          <p>
            Delivering reliable and efficient construction for businesses of all
            sizes.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src={Framing} text="Second slide" />
        <Carousel.Caption>
          <h3>Innovative Home Renovations</h3>
          <p>
            Transforming spaces with modern designs and quality craftsmanship.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src={HomeRemodel} text="Third slide" />
        <Carousel.Caption>
          <h3>Exceptional Exterior Construction</h3>
          <p>
            Crafting durable and beautiful exteriors that stand the test of
            time.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
