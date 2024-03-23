import React from "react";
import "./SectionHeading.css";

const SectionHeading = ({ heading, subHeading }) => {
  return (
    <div className="section-heading text-center mb-3">
      <h2 className="mb-3">{heading}</h2>
      <h4>{subHeading}</h4>
    </div>
  );
};

export default SectionHeading;
