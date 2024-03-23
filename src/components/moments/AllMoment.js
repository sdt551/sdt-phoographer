import React from "react";
import { Col, Row } from "react-bootstrap";
import Moment from "./Moment";
import M1 from "./img/m1.jpg";
import M2 from "./img/m2.jpg";
import M3 from "./img/m3.jpg";
import M4 from "./img/m4.jpg";
import "./AllMoment.css";

function AllMoment() {
  return (
    <div className="AllImg">
      <Row>
        <Col lg={3}>
          <Moment img={M1} />
        </Col>
        <Col lg={3}>
          <Moment img={M2} />
        </Col>
        <Col lg={3}>
          <Moment img={M3} />
        </Col>
        <Col lg={3}>
          <Moment img={M4} />
        </Col>
        <Col lg={3}>
          <Moment img={M3} />
        </Col>
        <Col lg={3}>
          <Moment img={M1} />
        </Col>
        <Col lg={3}>
          <Moment img={M2} />
        </Col>
        <Col lg={3}>
          <Moment img={M4} />
        </Col>
      </Row>
    </div>
  );
}

export default AllMoment;
