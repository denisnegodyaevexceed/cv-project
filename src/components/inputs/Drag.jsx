import React, { useState,useEffect } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import allCustomizedTemplateActions from '../../actions/customizedTemplateActions';
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
import DragPortfolio from './DragPortfolio'
import { Link } from 'react-router-dom'

import TextDecorateButtons from './TextDecorateButtons'
import { useDispatch, useSelector } from "react-redux";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


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
  const dispatch = useDispatch();

    const { 
      headerBackground, 
      bodyBackground, 
      headerImageValue, 
      bodyImagePosition, 
      bodyImageValue,
      nameSize,
      posSize,
      titleSize,
      subTitleSize,
      textSize,
      smallTextSize,

      nameColor,
      posColor,
      titleColor,
      subTitleColor,
      textColor,
      smallTextColor,
    } = useSelector(state => state.customizedTemplateReducer)
    const [cls, setCls] = useState(["side1"]);
  const [open, setOpen] = useState(true);
  useEffect(() => {
    if (open) {
      setCls((oldArr) => [...oldArr, "open1"]);
      
    } else {
      setCls(['side1']);

    }
  }, [open]);
  const handleChangeHeaderBackgroungComplete = (color) => {
    dispatch(allCustomizedTemplateActions.setHeaderBackgroundAction(color.hex));
};
const handleChangeBodyBackgroungComplete = (color) => {
  dispatch(allCustomizedTemplateActions.setBodyBackgroundAction(color.hex));
};
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

  
  
  
  const addHeaderBackground = (e) => {
    console.log(e.target.value, 'in drag header')
    {e.target.files[0]&& dispatch(allCustomizedTemplateActions.setHeaderImageAction(URL.createObjectURL(e.target.files[0]), e.target.value))}
  }

  const addBodyBackground = (e) => {
    console.log(e.target.value, 'in drag body')
    {e.target.files[0]&& dispatch(allCustomizedTemplateActions.setBodyImageAction(URL.createObjectURL(e.target.files[0]), e.target.value))}
  }

  



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

  const [font, setFont] = useState('Raleway');

  const handleChangeFont = (e) => {
    setFont(e.target.value)
  }

  const pdfExport = () => {
   
    pdfExportComponent.save();
    
  };

  let styleName = {
    fontSize: nameSize+'px',
    color: nameColor,
    fontFamily: font+'-Bold',
  }

  let stylePosition = {
    fontSize: posSize+'px',
    color: posColor,
    fontFamily: font+'-Bold',
  }

  let styleTitle = {
    fontSize: titleSize+'px',
    color: titleColor,
    fontFamily: font+'-Bold',
  }

  let styleSubTitle = {
    fontSize: subTitleSize+'px',
    color: subTitleColor,
    fontFamily: font+'-Bold',
  }

  let styleText = {
    fontSize: textSize+'px',
    color: textColor,
    fontFamily: font+'-Light',
  }

  let styleSmallText = {
    fontSize: smallTextSize+'px',
    color: smallTextColor,
    fontFamily: font+'-Light',
  }

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
          <Button
                    to="/steps"
                    component={Link}
                    variant="contained"
                    color="secondary">
                    Изменить
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
            <DragHeader styleName={styleName} stylePosition={stylePosition} />
            <DragBody styleSmallText={styleSmallText} styleText={styleText} styleTitle={styleTitle} styleSubTitle={styleSubTitle} />
            <br />
            <DragPortfolio styleSmallText={styleSmallText} styleText={styleText} styleTitle={styleTitle} styleSubTitle={styleSubTitle} />
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
            
     
      
      <div>
      <br/>
        
      <TextDecorateButtons/>
      <br/>
      <TextField
      className='select-font'
          id="standard-select-currency-native"
          select
          label="Select font"
          value={font}
          onChange={(e) => handleChangeFont(e)}
          SelectProps={{
            native: true,
          }}
        >
          <option  value='Raleway'>
            Raleway
          </option>
          <option  value='Caviar'>
            Caviar
          </option>
          <option  value='Walkway'>
          Walkway
          </option>
          <option  value='JetBrains'>
          JetBrains
          </option>
          <option  value='Dancing'>
          Dancing
          </option>
          <option  value='Vonique'>
          Vonique
          </option>
          <option  value='Monterey'>
          Monterey
          </option>
          <option  value='Titillium'>
          Titillium
          </option>
          <option  value='Monoglyceride'>
          Monoglyceride
          </option>
          <option  value='Flamenco'>
          Flamenco
          </option>
          <option  value='Cinzel'>
          Cinzel
          </option>
          <option  value='Optimus'>
          Optimus Princeps
          </option>
          <option  value='Neou'>
          Neou
          </option>
          
        </TextField>
        <br/>
        <br/>
<Accordion>
<AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={classes2.heading} ><h2>Backgrounds</h2></div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="flex-cont-edit">
            <div className="cont-edit">
      <Accordion>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={classes2.heading} ><h2>Background header</h2></div>
        </AccordionSummary>
        <AccordionDetails>
        <div>

          <form>
            <input accept="image/*" value={headerImageValue}  className={classes3.input} id="icon-button-file" type="file" onChange={(e)=>addHeaderBackground(e)}/>
            <label htmlFor="icon-button-file">
        <IconButton  aria-label="upload picture" component="span">
          
          <PhotoCamera className='photoInput'/>
        </IconButton>
      </label>
      <ButtonGroup size='small' color="primary" aria-label="outlined primary button group">
                        <Button onClick={(e) => dispatch(allCustomizedTemplateActions.setHeaderImagePositionAction('cover'))}>Cover</Button>
                        <Button onClick={(e) => dispatch(allCustomizedTemplateActions.setHeaderImagePositionAction('repeat'))}>Repeat</Button>
                        </ButtonGroup>
      </form>
      <SketchPicker color={headerBackground} onChangeComplete={handleChangeHeaderBackgroungComplete} />      

      </div>
      </AccordionDetails>
      </Accordion>
      </div>
      <div className="cont-edit">

      <Accordion>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={classes2.heading} ><h2>Background main <main></main></h2></div>
        </AccordionSummary>
        <AccordionDetails>
        <div><form>
            <input accept="image/*" value={bodyImageValue}  className={classes3.input} id="icon-button-file2" type="file" onChange={(e)=>addBodyBackground(e)}/>
            <label htmlFor="icon-button-file2">
        <IconButton  aria-label="upload picture" component="span">
          
          <PhotoCamera className='photoInput'/>
        </IconButton>
      </label>
      <ButtonGroup size='small' color="primary" aria-label="outlined primary button group">
                        <Button onClick={(e) => dispatch(allCustomizedTemplateActions.setBodyImagePositionAction('cover'))}>Cover</Button>
                        <Button onClick={(e) => dispatch(allCustomizedTemplateActions.setBodyImagePositionAction('repeat'))}>Repeat</Button>
                        </ButtonGroup>
      </form>
      <SketchPicker color={bodyBackground} onChangeComplete={handleChangeBodyBackgroungComplete} />

      </div>
      </AccordionDetails>
      </Accordion>
      </div>
      </div>

      </AccordionDetails>
      </Accordion>
      
     
      
      </div>
            </div> 
        
        {!open ? (
          <div onClick={() => setOpen(!open)} className="side-open1">
            Edit
          </div>
        ) : (
          <div className="side-close1" onClick={() => setOpen(!open)}>
            
          </div>
        )}
      </div>
    </Container>
  );
};
export default Drag;
