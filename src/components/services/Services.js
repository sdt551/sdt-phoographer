import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
// import S1 from "./img/s1.jpg";
// import S2 from "./img/s2.jpg";
// import S3 from "./img/s3.jpg";
import Service from "./Service";
import SectionHeading from "../hedingSection/SectionHeading";

import "./Services.css";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <section className="services-area">
        <Container>
          <SectionHeading heading="My Services" subHeading="Sub Heading" />
          <Row>
            {services.map((item) => (
              <Service item={item} key={item.id}></Service>
            ))}

            {/* <Col lg={4}>
              <Service
                img={S1}
                heading="Sporting Events Photography 1"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  itaque, rem quia ipsum ullam vitae voluptate similique
                  repellendus officia quis voluptatibus modi velit sunt natus ut
                  atque beatae tenetur officiis. 1"
              />
            </Col>
            <Col lg={4}>
              <Service
                img={S2}
                heading="Sporting Events Photography 2"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  itaque, rem quia ipsum ullam vitae voluptate similique
                  repellendus officia quis voluptatibus modi velit sunt natus ut
                  atque beatae tenetur officiis. 2"
              />
            </Col>
            <Col lg={4}>
              <Service
                img={S3}
                heading="Sporting Events Photography 3"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  itaque, rem quia ipsum ullam vitae voluptate similique
                  repellendus officia quis voluptatibus modi velit sunt natus ut
                  atque beatae tenetur officiis. 3"
              />
            </Col> */}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Services;
