import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import myPic from "../img/mypic.jpg";
import "./PersonalAbout.css";
import SectionHeading from "../../hedingSection/SectionHeading";

function PersonalAbout() {
  return (
    <section className="personalAbout">
      <Container>
        <Row className="align-items-center">
          <Col lg={5}>
            <div className="aboutImg">
              <img src={myPic} alt="" />
            </div>
          </Col>
          <Col lg={7}>
            <div className="aboutText p-4">
              <SectionHeading
                heading="Shahadat Hossen"
                subHeading="Web Designer"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita similique ratione adipisci tenetur, ad voluptas
                praesentium quam eveniet. Facilis dolore nihil veritatis
                repellat eveniet rerum eos, fugiat et? Eveniet, eos!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PersonalAbout;
