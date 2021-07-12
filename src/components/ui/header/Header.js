import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    height: "60px",
    backgroundColor: "rgba(180, 205, 228, 0.8)",
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <AppBar position="static" classes={{ root: classes.appbar }}>
            <Toolbar>
              <Typography variant="h4" classes={{ root: classes.title }}>
                Scatter Chart
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      </Grid>
    </Grid>
  );
};

export default Header;
