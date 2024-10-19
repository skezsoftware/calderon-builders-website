import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";
import testimonialPage from "../../assets/testimonialPage.png";

function Testimonials() {
  return (
    <div className="tesimonial-carousel-container"> 
    <Carousel className="tesimonial-carousel">
      <Carousel.Item>
        <ExampleCarouselImage src={testimonialPage} text="First slide" />
        <Carousel.Caption className="testimonial-text">
          <p style={{ fontStyle: "italic" }}>
            "Calderon Builders did an amazing job on our home renovation! They
            were professional, efficient, and paid great attention to detail.
            The team was always on time and communicated with us throughout the
            entire process. Our new kitchen and bathroom look stunning! I highly
            recommend them for any construction needs."
          </p>
          <p>- Maria Thompson</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src={testimonialPage} text="Second slide" />
        <Carousel.Caption className="testimonial-text">
          <p style={{ fontStyle: "italic" }}>
            "We hired Calderon Builders to build an addition to our home, and we
            couldn't be happier with the results. They listened to our ideas and
            worked with us to bring our vision to life. The craftsmanship is
            top-notch, and the entire project was completed on schedule. A
            fantastic experience from start to finish!"
          </p>
          <p>- James Miller</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src={testimonialPage} text="Third slide" />
        <Carousel.Caption className="testimonial-text">
          <p style={{ fontStyle: "italic" }}>
            "I was impressed with how Calderon Builders handled our office
            remodel. They kept the space clean during construction and minimized
            disruptions, which was really important for our team. The final
            product exceeded our expectations. We'll definitely be using their
            services again for future projects!"
          </p>
          <p>- Sarah Perez</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src={testimonialPage} text="Third slide" />
        <Carousel.Caption className="testimonial-text">
          <p style={{ fontStyle: "italic" }}>
            "From the moment we met the team at Calderon Builders, we knew we
            were in good hands. They transformed our outdated living space into
            a modern, open-concept design that we absolutely love. Their
            attention to detail and quality of work is truly impressive. Highly
            recommend their services!"
          </p>
          <p>- Michael Johnson</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src={testimonialPage} text="Third slide" />
        <Carousel.Caption className="testimonial-text">
          <p style={{ fontStyle: "italic" }}>
            "Calderon Builders completed a full renovation on our property, and
            we are beyond satisfied with the results. They were professional,
            easy to work with, and always kept us informed. The quality of their
            work is evident in every detail, from the flooring to the custom
            cabinetry. We couldn't have asked for a better contractor!"
          </p>
          <p>- Emily Davis</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Testimonials;
