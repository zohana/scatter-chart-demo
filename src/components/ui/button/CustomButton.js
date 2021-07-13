import React from "react";
import { PropTypes } from "prop-types";

import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  MuiButtonContained: {
    textDecoration: "none",
    backgroundColor: () => "rgba(0, 102, 153, 0.6)",
    "&:hover": { backgroundColor: () => "rgba(0, 102, 153, 0.5)" },
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  linkdisabled: { pointerEvents: "none" },
}));

const CustomButton = ({
  handleIsButtonDisabled,
  customClass,
  handleOnClick,
  children,
}) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      size="medium"
      color="primary"
      className={customClass + " " + classes.MuiButtonContained}
      disabled={handleIsButtonDisabled}
      onClick={handleOnClick}
    >
      {children}
    </Button>
  );
};

CustomButton.propTypes = {
  handleIsButtonDisabled: PropTypes.bool,
  handleOnClick: PropTypes.func,
  children: PropTypes.element,
};

export default CustomButton;
