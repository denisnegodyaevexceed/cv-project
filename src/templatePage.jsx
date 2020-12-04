import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom'


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
    <div className="page">
    <div className="container-pdf">
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={3} className="template-1">
          
              <img className="img-1-1" src="./template-1-1.png" alt="" />
              <img className="img-1-2" src="./template-1-2.png" alt="" />
           
        </Grid>
        <Grid item xs={3} className="template-1">
          
            <img className="img-1-1" src="./template-1-1.png" alt="" />
            <img className="img-1-2" src="./template-1-2.png" alt="" />
          
        </Grid>
        <Grid item xs={3} className="template-1">
          
            <img className="img-1-1" src="./template-1-1.png" alt="" />
            <img className="img-1-2" src="./template-1-2.png" alt="" />
          
        </Grid>
        <Grid item xs={3} className="template-1">
            <img className="img-1-1" src="./template-1-1.png" alt="" />
            <img className="img-1-2" src="./template-1-2.png" alt="" />
        </Grid>
        <Grid item xs={3} className="template-1">
         
            <img className="img-1-1" src="./template-1-1.png" alt="" />
            <img className="img-1-2" src="./template-1-2.png" alt="" />
         
        </Grid>
        <Grid item xs={3} className="template-1">
          <img className="img-1-1" src="./template-1-1.png" alt="" />
            <img className="img-1-2" src="./template-1-2.png" alt="" />
        </Grid>
        <Grid item xs={3} className="template-1">
          
            <img className="img-1-1" src="./template-1-1.png" alt="" />
            <img className="img-1-2" src="./template-1-2.png" alt="" />
          
        </Grid>
        <Grid item xs={3} className="template-1">
          
            <img className="img-1-1" src="./template-1-1.png" alt="" />
            <img className="img-1-2" src="./template-1-2.png" alt="" />
          
        </Grid>

      </Grid>
    </div>
    <Button 
        to="/steps"
        component={Link}
        variant="contained" 
        color="secondary">
          Далее
        </Button>
    </div>
    </div>
  );
}
