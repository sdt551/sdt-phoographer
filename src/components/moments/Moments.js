import React from "react";
import { Container } from "react-bootstrap";
import SectionHeading from "../hedingSection/SectionHeading";
import "./Moments.css";
import AllMoment from "./AllMoment";

function Moments() {
  return (
    <section className="moments-area">
      <Container>
        <SectionHeading heading="This Moment" />
        <AllMoment />
      </Container>
    </section>
  );
}

export default Moments;
