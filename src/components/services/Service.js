import React from "react";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Service({ item }) {
  return (
    <Col lg={4}>
      <h3>{item.name}</h3>
      <p>{item.des}</p>
      <Button variant="secondary">Photography</Button>
    </Col>

    // <div className="single-services">
    //     <img src={img} alt="" />
    //     <h3>{heading}</h3>
    //     <p>{text}</p>
    //     <Button variant="secondary">Photography</Button>
    //   </div>
  );
}

export default Service;
