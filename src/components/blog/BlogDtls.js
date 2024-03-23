import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionHeading from "../hedingSection/SectionHeading";
import "./blogDtls.css";

function BlogDtls() {
  return (
    <div className="blogDtls py-5">
      <Container>
        <SectionHeading heading="Question Answer" />
        <Row>
          <Col lg={4}>
            <div className="single-post">
              <h3>Eifference between authoriation and authentication</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                tempore id obcaecati et accusamus quod mollitia vitae iusto
                assumenda quasi nihil, consectetur repellendus eius doloremque
                voluptates autem. Dolor, officiis sequi.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="single-post">
              <h3>authoriation and authentication</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                tempore id obcaecati et accusamus quod mollitia vitae iusto
                assumenda quasi nihil, consectetur repellendus eius doloremque
                voluptates autem. Dolor, officiis sequi.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="single-post">
              <h3>Eifference between authoriation and authentication</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                tempore id obcaecati et accusamus quod mollitia vitae iusto
                assumenda quasi nihil, consectetur repellendus eius doloremque
                voluptates autem. Dolor, officiis sequi.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BlogDtls;
