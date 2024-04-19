import React from "react";
import { Col } from "react-bootstrap";
function Moment({ singleImg, index, getData }) {
  const { img } = singleImg;

  const viewImg = (img, index) => {
    getData(img, index);
  };
  return (
    <>
      <Col lg={3}>
        <img
          src={img}
          alt="img"
          className="w-100"
          style={{ cursor: "pointer" }}
          onClick={() => viewImg(img, index)}
        />
      </Col>
    </>
  );
}

export default Moment;
