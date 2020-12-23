import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import allTemplateActions from "./actions/templateActions";
import Snackbar from "@material-ui/core/Snackbar";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import MuiAlert from '@material-ui/lab/Alert';
import firebase from 'firebase';
import { useHistory } from "react-router-dom";
import allCustomizedTemplateActions from './actions/customizedTemplateActions';
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
  let history = useHistory();
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const [open, setOpen] = React.useState(false);
  const [savedTemplates, setSavedTemplates] = React.useState([]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const classes = useStyles();

  const dispatch = useDispatch();

  const { templateNumber } = useSelector((state) => state.templateReducer);

  React.useEffect(() => {
    let cleanupFunction = false;
    const fetchData = () => {
      let itemList = [];
      firebase.database().ref(`templates/`).on('value', (snapshot) => {
        const data = snapshot.val();
        let i = 0;
        const resp = data;
        for (let key in resp){
          itemList[i] = {
              uid: key,
              name: resp[key].info.firstName,
          } 
          i++;
        }
        setSavedTemplates(itemList);
      });
    }

    if(!cleanupFunction){
      fetchData();
    }
    return () => cleanupFunction = true;
  }, [])


  const loadTemplate = (uid) => {
    history.push(`/resumeLoad/${uid}`);
  }



   

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
                  
                  handleClick(Alert)
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
                  
                  handleClick(Alert)
                  dispatch(allTemplateActions.setTemplateAction(e.target.id));
                }}
                className="img-1-2"
                src="./template-2-2.png"
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
                  
                  handleClick(Alert)
                  dispatch(allTemplateActions.setTemplateAction(e.target.id));
                }}
                className="img-1-2"
                src="./template-3-2.png"
                alt=""
              />
             

              
             <div className="cont-item">
              
              <h3 className="h3-template">Template 3</h3>
              {templateNumber==='3'?<CheckCircleOutlineIcon className="icon"/>:null}
              </div>
              </div>
            </Grid>
            <Grid item xs={3} className="template-1">
              <div className="cont-temp">
              <img className="img-1-1" src="./template-4-1.png" alt="" />
              <img
                id="4"
                onClick={(e) => {
                  
                  handleClick(Alert)
                  dispatch(allTemplateActions.setTemplateAction(e.target.id));
                }}
                className="img-1-2"
                src="./template-4-2.png"
                alt=""
              />
             

              
             <div className="cont-item">
              
              <h3 className="h3-template">Template 4</h3>
              {templateNumber==='4'?<CheckCircleOutlineIcon className="icon"/>:null}
              </div>
              </div>
            </Grid>
            <Grid item xs={3} className="template-1">
              <div className="cont-temp">
              <img className="img-1-1" src="./template-5-1.png" alt="" />
              <img
                id="5"
                onClick={(e) => {
                  
                  handleClick(Alert)
                  dispatch(allTemplateActions.setTemplateAction(e.target.id));
                }}
                className="img-1-2"
                src="./template-5-2.png"
                alt=""
              />
             

              
             <div className="cont-item">
              
              <h3 className="h3-template">Template 5</h3>
              {templateNumber==='5'?<CheckCircleOutlineIcon className="icon"/>:null}
              </div>
              </div>
            </Grid>
            <Grid item xs={3} className="template-1">
              <div className="cont-temp">
              <img className="img-1-1" src="./template-6-1.png" alt="" />
              <img
                id="6"
                onClick={(e) => {
                  
                  handleClick(Alert)
                  dispatch(allTemplateActions.setTemplateAction(e.target.id));
                }}
                className="img-1-2"
                src="./template-6-1.png"
                alt=""
              />
             

              
             <div className="cont-item">
              
              <h3 className="h3-template">Create template</h3>
              {templateNumber==='6'?<CheckCircleOutlineIcon className="icon-2"/>:null}
              </div>
              </div>
            </Grid>
            
          </Grid>
        </div>

        {templateNumber===""?<h3 className="h3-template">
please select a template</h3>:<Button
          onClick={()=>{dispatch(allCustomizedTemplateActions.setCustomTemplateUidAction(null));history.push('/resume')}}
          variant="contained"
          color="secondary"
        >
          Next
        </Button>}


        <ul style={{color: 'white'}}>
          {savedTemplates.map((item, index) => (
            <li onClick={() => loadTemplate(item.uid)} key={index}>{item.name}</li>
          ))}
        </ul>



        
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
      
    </div>
  );
}
