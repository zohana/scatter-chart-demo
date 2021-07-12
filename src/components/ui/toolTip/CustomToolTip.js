import React from "react";
import "./CustomToolTip.css";
import { PropTypes } from "prop-types";

const CustomToolTip = ({ active, payload }) => {
  console.log("payload", payload);
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="intro">x coordinate: {payload[0].value}</p>
        <p className="intro">y coordinate: {payload[1].value}</p>
        <p className="desc">
          You are looking at the data value of <b>{payload[0].value}</b>,{" "}
          <b>{payload[1].value}</b>
        </p>
      </div>
    );
  }
  return null;
};

CustomToolTip.propTypes = {
  active: PropTypes.any,
  payload: PropTypes.any,
};

export default CustomToolTip;
