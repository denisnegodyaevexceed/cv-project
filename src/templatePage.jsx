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
    
    
    padding: theme.spacing(5),
    textAlign: "center",
   
    
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <div>
            <div className="template-1">
              <img className="img-1-1" src="./template-1-1.png" alt="" />
              <img className="img-1-2" src="./template-1-2.png" alt="" />
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div ><div className="template-1">
              <img className="img-1-1" src="./template-1-1.png" alt="" />
              <img className="img-1-2" src="./template-1-2.png" alt="" />
            </div></div>
        </Grid>
        <Grid item xs={3}>
          <div ><div className="template-1">
              <img className="img-1-1" src="./template-1-1.png" alt="" />
              <img className="img-1-2" src="./template-1-2.png" alt="" />
            </div></div>
        </Grid>
        <Grid item xs={3}>
          <div ><div className="template-1">
              <img className="img-1-1" src="./template-1-1.png" alt="" />
              <img className="img-1-2" src="./template-1-2.png" alt="" />
            </div></div>
        </Grid>
        <Grid item xs={3}>
          <div ><div className="template-1">
              <img className="img-1-1" src="./template-1-1.png" alt="" />
              <img className="img-1-2" src="./template-1-2.png" alt="" />
            </div></div>
        </Grid>
        <Grid item xs={3}>
          <div ><div className="template-1">
              <img className="img-1-1" src="./template-1-1.png" alt="" />
              <img className="img-1-2" src="./template-1-2.png" alt="" />
            </div></div>
        </Grid>
        <Grid item xs={3}>
          <div ><div className="template-1">
              <img className="img-1-1" src="./template-1-1.png" alt="" />
              <img className="img-1-2" src="./template-1-2.png" alt="" />
            </div></div>
        </Grid>
        <Grid item xs={3}>
          <div ><div className="template-1">
              <img className="img-1-1" src="./template-1-1.png" alt="" />
              <img className="img-1-2" src="./template-1-2.png" alt="" />
            </div></div>
        </Grid>

      </Grid>
    </div>
  );
}
