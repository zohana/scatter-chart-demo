import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Grid, makeStyles, Fab } from "@material-ui/core";

import Blurb from "../ui/blurb/Blurb";
import AddCircleOutlineTwoToneIcon from "@material-ui/icons/AddCircleOutlineTwoTone";
import TextFormField from "../ui/textField/TextField";
import CustomButton from "../ui/button/CustomButton";

const useStyles = makeStyles((theme) => ({
  customButtonClass: {
    position: "relative",
    top: "13rem",
    left: "37%",
  },
  wrapperDiv: { marginBottom: "2em" },
  root_grid: { flexGrow: 1 },
  link: {
    textDecoration: "none",
    color: "white",
  },
  linkdisabled: { pointerEvents: "none" },
  add: {
    backgroundColor: () => "rgba(0, 102, 153, 0.6)",
    "&:hover": { backgroundColor: () => "rgba(0, 102, 153, 0.5)" },
    boxShadow: "none",
    position: "relative",
    top: "25px",
  },
  remove: {
    backgroundColor: () => "rgba(190, 55, 55, 0.9)",
    "&:hover": { backgroundColor: () => "rgba(190, 55, 55, 0.7)" },
    boxShadow: "none",
    position: "relative",
  },
  trashCan: {
    color: "rgb(190, 55, 55)",
  },
}));

const Form = () => {
  const classes = useStyles();
  let isDisabled;

  // setting input coordinates list state
  const [listOfCoordinates, setListOfCoordinates] = useState([
    { x: "", y: "" },
  ]);

  // setting error state
  const [errors, setErrors] = useState({});

  // validating the input values
  const validate = (coordinateValues, i) => {
    let temp = { ...errors };
    if ("x" in coordinateValues) {
      temp.x = coordinateValues.x ? (
        ""
      ) : (
        <span>
          This field is required.
          <br />
          Enter numbers only
        </span>
      );
      temp.i = coordinateValues.i;
    }

    if ("y" in coordinateValues) {
      temp.y = coordinateValues.y ? (
        ""
      ) : (
        <span>
          This field is required.
          <br />
          Enter numbers only
        </span>
      );
      temp.i = coordinateValues.i;
    }
    setErrors({ ...temp });
  };

  // Set the behaviour when blur
  const handleInputBlur = (e, i) => {
    const { name, value } = e.target;
    const list = [...listOfCoordinates];

    list[i][name] = parseInt(value);

    setListOfCoordinates(list);

    validate({ [name]: parseInt(value), i });
  };

  // Adding text field group
  const handleAddClick = () => {
    setListOfCoordinates([...listOfCoordinates, { x: "", y: "" }]);
  };

  // Setting the button to disable=true/false
  const handleDisableForMainButton = () => {
    listOfCoordinates.forEach((item, i) => {
      if (item.x === "" || item.y === "") {
        return (isDisabled = true);
      } else {
        return (isDisabled = false);
      }
    });
    if (errors.x || errors.y || isDisabled) {
      return (isDisabled = true);
    } else {
      return (isDisabled = false);
    }
  };

  // Removing text field group
  const handleRemoveCoordinated = (i) => {
    const list = [...listOfCoordinates];
    list.splice(i, 1);
    setListOfCoordinates(list);
  };
  return (
    <div>
      <Blurb text="Enter x co-ordinates and y co-ordinates to build your own scatter chart!" />
      <br />
      {listOfCoordinates.map((item, index) => (
        <React.Fragment key={index}>
          <Grid container spacing={1}>
            <Grid item xs={2}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={6}>
              <TextFormField
                errorTextX={errors.x && errors.i === index ? errors.x : ""}
                errorTextY={errors.y && errors.i === index ? errors.y : ""}
                errorX={errors.x && errors.i === index ? true : false}
                errorY={errors.y && errors.i === index ? true : false}
                valueX={item.x || ""}
                valueY={item.y || ""}
                handleBlur={(e) => handleInputBlur(e, index)}
                handleChange={(e) => handleInputBlur(e, index)}
                handleRemoveItem={() => handleRemoveCoordinated(index)}
                generatedList={listOfCoordinates}
              />
            </Grid>
            <Grid item xs={1} align="right">
              {listOfCoordinates.length - 1 === index && (
                <Fab
                  onClick={() => handleAddClick(index)}
                  color="primary"
                  classes={{ root: classes.add }}
                  component="button"
                  aria-label="remove"
                  size="small"
                  disabled={
                    item.x === "" || item.y === "" || errors.x || errors.y
                      ? true
                      : false
                  }
                >
                  <AddCircleOutlineTwoToneIcon fontSize="small" />
                </Fab>
              )}
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </React.Fragment>
      ))}

      <CustomButton
        handleIsButtonDisabled={handleDisableForMainButton()}
        customClass={classes.customButtonClass}
        children={
          <Link
            to={{ pathname: "/Chart", data: listOfCoordinates }}
            className={classes.link}
          >
            View Scatter Chart
          </Link>
        }
      />
    </div>
  );
};

export default Form;
