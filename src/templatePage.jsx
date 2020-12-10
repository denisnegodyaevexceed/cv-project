import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import allTemplateActions from "./actions/templateActions";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
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
  function TransitionLeft(props) {
    return <Slide {...props} direction="left" ></Slide>;
  }
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);
  const handleClick = (Transition) => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  const dispatch = useDispatch();

  const { templateNumber } = useSelector((state) => state.templateReducer);

  console.log(templateNumber, "num");
  return (
    <div className="page">
      <div className="container-pdf">
        <h2 className="h2-template">Choose a template</h2>
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={3} className="template-1">
              <div className="cont-temp">
              <img className="img-1-1" src="./template-1-1.png" alt="" />
              <img
                id="1"
                onClick={(e) => {
                  
                  handleClick(TransitionLeft)
                  dispatch(allTemplateActions.setTemplateAction(e.target.id));
                }}
                className="img-1-2"
                src="./template-1-2.png"
                alt=""
              />
             

              
             <div className="cont-item">
              
              <h3 className="h3-template">Template 1</h3>
              {templateNumber==='1'?<CheckCircleOutlineIcon className="icon"/>:null}
              </div>
              </div>
            </Grid>
            <Grid item xs={3} className="template-1">
              <div className="cont-temp">
              <img className="img-1-1" src="./template-2-1.png" alt="" />
              <img
                id="2"
                onClick={(e) => {
                  
                  handleClick(TransitionLeft)
                  dispatch(allTemplateActions.setTemplateAction(e.target.id));
                }}
                className="img-1-2"
                src="./template-2-1.png"
                alt=""
              />
             

              
             <div className="cont-item">
              
              <h3 className="h3-template">Template 2</h3>
              {templateNumber==='2'?<CheckCircleOutlineIcon className="icon"/>:null}
              </div>
              </div>
            </Grid>
            <Grid item xs={3} className="template-1">
              <div className="cont-temp">
              <img className="img-1-1" src="./template-3-1.png" alt="" />
              <img
                id="3"
                onClick={(e) => {
                  
                  handleClick(TransitionLeft)
                  dispatch(allTemplateActions.setTemplateAction(e.target.id));
                }}
                className="img-1-2"
                src="./template-3-1.png"
                alt=""
              />
             

              
             <div className="cont-item">
              
              <h3 className="h3-template">Template 3</h3>
              {templateNumber==='3'?<CheckCircleOutlineIcon className="icon"/>:null}
              </div>
              </div>
            </Grid>
            
          </Grid>
        </div>
       
        {templateNumber===""?<h3 className="h3-template">
please select a template</h3>:<Button
          to="/steps"
          component={Link}
          variant="contained"
          color="secondary"
        >
          Далее
        </Button>}
      </div>
      <Snackbar
        className="snack"
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message="Template selected!"
        key={transition ? transition.name : ""}
      />
      
    </div>
  );
}
