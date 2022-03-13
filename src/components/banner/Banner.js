import React from 'react';
import { Carousel } from 'react-bootstrap';

import './Banner.css';
const Banner = () => {
  return (
    <div>
      <Carousel>
  <Carousel.Item>
    
    
     <img
      className="d-block img-fluid w-100 banner-image"
      src="https://images.hdqwalls.com/wallpapers/bmw-f82-dark-side-car-digital-art-4k-3d.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>Rent Your Best Car</h1>
      <p>Stay Happy, Stay Safe</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block img-fluid w-100 banner-image"
      src="https://images.hdqwalls.com/wallpapers/dark-side-car-digital-art-4k-2z.jpg"
    />

    <Carousel.Caption>
      <h1>Rent Your Best Choice</h1>
      <p>Your Safety, Our Concern</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block img-fluid w-100 banner-image"
      src="https://wallpaperaccess.com/full/338363.jpg"
    />

    <Carousel.Caption>
      <h1>We are Here For Your  Best Rent</h1>
      <p>Stay Safe, Stay Calm</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
};

export default Banner;