import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

function Banner() {
  return (
    <Carousel id="home">
      <Carousel.Item>
        <img
          className="d-block w-100 banner__img"
          src="http://kamleshyadav.com/html/cycling/version-1/js/plugin/revolution/assets/main_banner1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>
            BEST
            <br /> CYCLING
            <br /> EXPERIENCE
          </h1>
          <p>
            become the world leader on the internet for the sport of cycling.
          </p>
          <Link to="/shop">
            <Button className="primary__button mt-3" variant="primary">
              Explore
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 banner__img"
          src="https://template.hasthemes.com/rideo/rideo/img/slider/1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>
            BEST
            <br /> CYCLING
            <br /> EXPERIENCE
          </h1>
          <p>
            become the world leader on the internet for the sport of cycling.
          </p>
          <Link to="/shop">
            <Button className="primary__button mt-3" variant="primary">
              Explore
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
