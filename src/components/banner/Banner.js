import React from "react";
import Carousel from "react-bootstrap/Carousel";
import b1 from "./img/b1.jpg";
import b2 from "./img/b2.jpg";
import b3 from "./img/b3.jpg";
import "./Banner.css";
function Banner() {
  return (
    <>
      <section className="herro-sec">
        <Carousel>
          <Carousel.Item>
            <img src={b1} alt="" srcset="" />
            <Carousel.Caption>
              <h1>Rajshahai College</h1>
              <p>Rajshahi College Friend</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={b2} alt="" srcset="" />
            <Carousel.Caption>
              <h1>Photoshop Edit</h1>
              <p>Just Fun</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={b3} alt="" srcset="" />
            <Carousel.Caption>
              <h1>Eid Mobarak</h1>
              <p>All Peple</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
}

export default Banner;
