import React, { useState } from "react";
import { Row } from "react-bootstrap";
import Moment from "./Moment";
import "./AllMoment.css";
import { allImgArr } from "./AllImgArr";
import SelectedImg from "./SelectedImg";

function AllMoment() {
  const [data, setData] = useState({ img: "", index: 0 });
  const getData = (img, index) => {
    setData({ img, index });
  };
  const imgAction = (action) => {
    if (!action) {
      setData({ img: "", index: 0 });
    }
  };

  return (
    <div className="AllImg">
      <Row>
        {data.img && <SelectedImg img={data.img} imgAction={imgAction} />}
        {allImgArr.map((img, index) => (
          <Moment singleImg={img} key={index} index={index} getData={getData} />
        ))}
      </Row>
    </div>
  );
}

export default AllMoment;
