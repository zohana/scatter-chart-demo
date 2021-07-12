import React from "react";
import PropTypes from "prop-types";

import {
  Grid,
  IconButton,
  Paper,
  TextField,
  makeStyles,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  inputvalue: {
    backgroundColor: "white",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  trashCan: {
    color: "rgb(190, 55, 55)",
  },
  remove: {
    position: "relative",
    left: "23px",
    top: "-13px",
  },
}));

const TextFormField = ({
  handleChange,
  valueX,
  valueY,
  errorY,
  errorX,
  errorTextX,
  errorTextY,
  handleRemoveItem,
  generatedList,
  handleBlur,
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={1} justifyContent="flex-start">
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            required={true}
            label="x coordinates"
            classes={{ root: classes.inputvalue }}
            name="x"
            value={valueX}
            placeholder="x coordinates"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errorX}
            helperText={errorTextX}
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            required={true}
            variant="outlined"
            label="y coordinates"
            value={valueY}
            name="y"
            placeholder="y coordinates"
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={errorTextY}
            error={errorY}
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={1}>
          {generatedList.length !== 1 && (
            <IconButton
              size="small"
              classes={{ root: classes.remove }}
              onClick={handleRemoveItem}
              component="button"
              aria-label="remove"
            >
              <CloseIcon
                fontSize="small"
                classes={{ root: classes.trashCan }}
              />
            </IconButton>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

// PropTypes
TextFormField.propTypes = {
  handleChange: PropTypes.func.isRequired,
  valueX: PropTypes.number.isRequired,
  valueY: PropTypes.number.isRequired,
  errorY: PropTypes.bool.isRequired,
  errorX: PropTypes.bool.isRequired,
  errorTextX: PropTypes.string.isRequired,
  errorTextY: PropTypes.string.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  generatedList: PropTypes.any.isRequired,
  handleBlur: PropTypes.func.isRequired,
};

export default TextFormField;
