import React from "react";
import PropTypes from "prop-types";

const Blurb = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

Blurb.propTypes = {
  text: PropTypes.any.isRequired,
};

export default Blurb;
