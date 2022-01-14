import React from "react";
import { Carousel, Image } from "react-bootstrap";

export default function Slider() {
  return (
    <Carousel className="">
      <Carousel.Item>
        <Image
          className="d-none d-sm-block w-100"
          src="https://res.cloudinary.com/dkz/image/upload/v1640620281/CGA/home/carousel-1_lionm3.jpg"
          alt="First slide"
          fluid
        />
        <Image
          className="d-sm-none d-block w-100"
          src="https://res.cloudinary.com/dkz/image/upload/v1640620510/CGA/home/carousel-movile-1_rleg0s.jpg"
          alt="First slide cel"
          fluid
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-none d-sm-block w-100"
          src="https://res.cloudinary.com/dkz/image/upload/v1640620281/CGA/home/carousel-2_rh9dvr.jpg"
          alt="Second slide"
          fluid
        />
        <Image
          className="d-sm-none d-block w-100"
          src="https://res.cloudinary.com/dkz/image/upload/v1640620511/CGA/home/carousel-movile-2_ee3pfk.jpg"
          alt="Second slider cel"
          fluid
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-none d-sm-block w-100"
          src="https://res.cloudinary.com/dkz/image/upload/v1640620279/CGA/home/carousel-3_itgdul.jpg"
          alt="Third slide"
          fluid
        />
        <Image
          className=" d-sm-none d-block w-100"
          src="https://res.cloudinary.com/dkz/image/upload/v1640620514/CGA/home/carousel-movile-3_ik7edo.jpg"
          alt="First slide cel"
          fluid
        />
      </Carousel.Item>
    </Carousel>
  );
}
