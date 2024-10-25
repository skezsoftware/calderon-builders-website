import React from "react";
import "./about.css";

const AboutPageHeader = () => {
  return (
    <>
      <div className="px-4 py-4 my-2 text-center">
        <i className="bi bi-clock-history clockIcon"></i>
        <h1 className="display-5 fw-bold text-body-emphasis">Going Back in Time</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4 header-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            itaque numquam aperiam neque est harum totam nostrum distinctio,
            delectus officia. Minus non incidunt atque sunt alias harum eaque
            earum fugiat.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPageHeader;
