import React from "react";

function SelectedImg({ img, imgAction }) {
  const ingAction = (action) => {
    imgAction(action);
  };

  return (
    <div
      className="w-100 h-100 d-flex justify-content-center align-items-center"
      style={{ overflow: "hidden" }}
    >
      <div style={{ position: "relative" }}>
        <button
          style={{
            position: "absolute",
            color: "red",
            top: "10px",
            right: "0px",
          }}
          onClick={() => ingAction()}
        >
          X
        </button>
        <img className="h-100" style={{ width: "auto" }} src={img} alt="" />
      </div>
    </div>
  );
}

export default SelectedImg;
