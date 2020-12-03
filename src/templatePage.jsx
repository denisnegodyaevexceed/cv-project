
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
      position:"relative",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <div className="template-1">
              <img className="img-1-1" src="./template-1-1.png" alt="" />
              <img className="img-1-2" src="./template-1-2.png" alt="" />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><div className="template-1">
              <img className="img-1-1" src="./template-1-1.png" alt="" />
              <img className="img-1-2" src="./template-1-2.png" alt="" />
            </div></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><div className="template-1">
              <img className="img-1-1" src="./template-1-1.png" alt="" />
              <img className="img-1-2" src="./template-1-2.png" alt="" />
            </div></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><div className="template-1">
              <img className="img-1-1" src="./template-1-1.png" alt="" />
              <img className="img-1-2" src="./template-1-2.png" alt="" />
            </div></Paper>
        </Grid>
        
      </Grid>
    </div>
    </Container>
  );
}
