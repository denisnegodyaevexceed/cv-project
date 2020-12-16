import React, { useState,useEffect } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import { Button, Container, Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { makeStyles } from "@material-ui/core/styles";
import { SketchPicker } from "react-color";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import "gridstack/dist/gridstack.min.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { GridStack } from "gridstack";
// THEN to get HTML5 drag&drop
import "gridstack/dist/h5/gridstack-dd-native";
// OR to get legacy jquery-ui drag&drop
import "gridstack/dist/jq/gridstack-dd-jqueryui";
import DragHeader from "./DragHeader";
import DragBody from "./DragBody";
import { useDispatch, useSelector } from "react-redux";

const useStyles3 = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

const Drag = () => {
    const [cls, setCls] = useState(["side1"]);
  const [open, setOpen] = useState(true);
  useEffect(() => {
    if (open) {
      setCls((oldArr) => [...oldArr, "open1"]);
      
    } else {
      setCls(['side1']);

    }
  }, [open]);


  const {
    firstCompany,
    firstPosition,
    firstDescription,
    secondCompany,
    secondPosition,
    secondDescription,
  } = useSelector((state) => state.aboutWorkHistoryReducer);
  const { frontend, backend, dbs, other } = useSelector(
    (state) => state.aboutHardSkillsReducer
  );
  const {
    firstProject,
    secondProject,
    thirdProject,
    fourthProject,
    fifthProject,
    sixthProject,
  } = useSelector((state) => state.portfolioReducer);
  const projects = [
    firstProject,
    secondProject,
    thirdProject,
    fourthProject,
    fifthProject,
    sixthProject,
  ];

  const userInfo = useSelector((state) => state.aboutMeReducer);

  const dispatch = useDispatch();
  const { headerBackground } = useSelector(
    (state) => state.customizedTemplateReducer
  );

  let [color, setColor] = useState("#fff");

  console.log(color, "color");

  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  let pdfExportComponent;
  const classes3 = useStyles3();
  const useStyles2 = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));
  const [isPDF, setIsPDF] = useState(false);
  const classes2 = useStyles2();

  const pdfExport = () => {
    setIsPDF(true);
    pdfExportComponent.save();
    setTimeout(() => {
      setIsPDF(false);
    }, 500);
  };

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="secondary"
            className="k-button"
            onClick={() => {
              pdfExport();
            }}
          >
            Скачать PDF
          </Button>
        </Grid>
        <Grid item xs={12} className={`${isPDF && "noBorder"}`}>
          <PDFExport
            forcePageBreak=".page-break"
            ref={(component) => (pdfExportComponent = component)}
            fileName={
              `${userInfo.firstName + userInfo.secondName}` +
              `${userInfo.careerObjective}`
            }
            // paperSize="A4"
          >
            <DragHeader />
            <DragBody />
          </PDFExport>
        </Grid>
      </Grid>
      {/*             
            <div className='customizeWindow'>
            <form>
            <input accept="image/*" className={classes3.input} id="icon-button-file" type="file" />
            <label htmlFor="icon-button-file">
        <IconButton  aria-label="upload picture" component="span">
          
          <PhotoCamera className='photoInput'/>
        </IconButton>
      </label>
      </form>
      <SketchPicker color={color} onChangeComplete={handleChangeComplete} />
            </div> */}

      <div className={cls.join(" ")}>
       <h2>Editing</h2>
       <div className="edit-cont">
            <form>
            <input accept="image/*" className={classes3.input} id="icon-button-file" type="file" />
            <label htmlFor="icon-button-file">
        <IconButton  aria-label="upload picture" component="span">
          
          <PhotoCamera className='photoInput'/>
        </IconButton>
      </label>
      </form>
      <div className="cont-edit">

      <Accordion>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={classes2.heading} ><h2>Color</h2></div>
        </AccordionSummary>
        <AccordionDetails>
      <SketchPicker  color={color} onChangeComplete={handleChangeComplete} />
      </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={classes2.heading} ><h2>Color</h2></div>

        </AccordionSummary>
        <AccordionDetails>
      <SketchPicker  color={color} onChangeComplete={handleChangeComplete} />
      </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={classes2.heading} ><h2>Color</h2></div>

        </AccordionSummary>
        <AccordionDetails>
      <SketchPicker  color={color} onChangeComplete={handleChangeComplete} />
      </AccordionDetails>
      </Accordion>
      </div>
            </div> 
        
        {!open ? (
          <div onClick={() => setOpen(!open)} className="side-open1">
            Open
          </div>
        ) : (
          <div className="side-close1" onClick={() => setOpen(!open)}>
            Close
          </div>
        )}
      </div>
    </Container>
  );
};
export default Drag;
