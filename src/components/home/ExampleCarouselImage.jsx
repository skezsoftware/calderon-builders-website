
export default function ExampleCarouselImage({ src, text }) {
  return (
    <img
      // style={{ height: '70vh'}}
      className="d-block w-100"
      id="carousel-image"
      src={src}
      alt={text}
    />
  );
}
