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
// import "gridstack/dist/gridstack.min.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// THEN to get HTML5 drag&drop
import "gridstack/dist/h5/gridstack-dd-native";
// OR to get legacy jquery-ui drag&drop
import "gridstack/dist/jq/gridstack-dd-jqueryui";
import DragHeader from "./DragHeader";
import DragBody from "./DragBody";
import DragPortfolio from './DragPortfolio'
import { Link } from 'react-router-dom'
import "../grid.scss";
import TextDecorateButtons from './TextDecorateButtons'
import { useDispatch, useSelector } from "react-redux";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import AboutMe from "./aboutMe";
import Portfolio from "./portfolio";
import AboutWorkHistory from "./aboutWorkHistory";
import AboutHardSkills from "./aboutHardSkills";

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
  let pdfExportComponent;
  const dispatch = useDispatch();
  const { 
    headerBackground, 
    bodyBackground, 
    headerImageValue,  
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
  } = useSelector(state => state.customizedTemplateReducer);
  const userInfo = useSelector((state) => state.aboutMeReducer);
  const [cls, setCls] = useState(["side1"]);
  const [cls2, setCls2] = useState(["side2"]);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(true);
  const [font, setFont] = useState('Raleway');
  const useStyles2 = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.secondary,
      '& svg': {
        margin: theme.spacing(1),
        // fontSize:15,
        padding:4,
      },
      '& hr': {
        margin: theme.spacing(0, 0.5),
      },
    },
  }));
  const classes = useStyles();
  const classes2 = useStyles2();
  const classes3 = useStyles3();

  useEffect(() => {
    if (open2) {
      setCls2((oldArr) => [...oldArr, "open2"]);
      
    } else {
      setCls2(['side2']);

    }
  }, [open2]);

  useEffect(() => {
    if (open) {
      setCls((oldArr) => [...oldArr, "open1"]);
      
    } else {
      setCls(['side1']);

    }
  }, [open]);

  useEffect(() => {
    open&&setOpen2(false);
  },[open])

  useEffect(() => {
    open2&&setOpen(false);
  },[open2])


  const handleChangeHeaderBackgroungComplete = (color) => {
    dispatch(allCustomizedTemplateActions.setHeaderBackgroundAction(color.hex));
  };

  const handleChangeBodyBackgroungComplete = (color) => {
    dispatch(allCustomizedTemplateActions.setBodyBackgroundAction(color.hex));
  };
  
  const addHeaderBackground = (e) => {
    console.log(e.target.value, 'in drag header')
    return (e.target.files[0]&& dispatch(allCustomizedTemplateActions.setHeaderImageAction(URL.createObjectURL(e.target.files[0]), e.target.value)))
  }

  const addBodyBackground = (e) => {
    console.log(e.target.value, 'in drag body')
    return (e.target.files[0]&& dispatch(allCustomizedTemplateActions.setBodyImageAction(URL.createObjectURL(e.target.files[0]), e.target.value)))
  }  

  const pdfExport = () => {
    pdfExportComponent.save();
  };

  const handleChangeFont = (e) => {
    setFont(e.target.value)
  }

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

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight:300,
        width: 250,
      },
    },
  };

  
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <div className="button">
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
                </div>
        </Grid>
        <Grid item xs={12}>
          <PDFExport
            forcePageBreak=".page-break"
            ref={(component) => (pdfExportComponent = component)}
            fileName={
              `${userInfo.firstName + userInfo.secondName}` +
              `${userInfo.careerObjective}`
            }
          
          >
            <DragHeader styleName={styleName} stylePosition={stylePosition} />
            <DragBody styleSmallText={styleSmallText} styleText={styleText} styleTitle={styleTitle} styleSubTitle={styleSubTitle} />
            <br />
            <DragPortfolio styleSmallText={styleSmallText} styleText={styleText} styleTitle={styleTitle} styleSubTitle={styleSubTitle} />
          </PDFExport>
        </Grid>
      </Grid>
      <div className={cls2.join(" ")}>
       <AboutMe/>
       <br/>
      <AboutWorkHistory/>
       <br/>
       <AboutHardSkills/>
       <br/>
       <Portfolio/>
        
        {!open2 ? (
          <div onClick={() => setOpen2(!open2)} className="side-open2">
            Edit
          </div>
        ) : (
          <div className="side-close2" onClick={() => setOpen2(!open2)}>
            
          </div>
        )}
      </div>
      <div className={cls.join(" ")}>
       <h2>Editing</h2>
       <div className="edit-cont">
      <div>
      <br/>
      <br/>
      <Grid container alignItems="center" className={classes.root}>
      <h3 style={{width: '100%',textAlign:"center",margin:'10px'}}>Select font</h3>
      <Select
      className='select-font'
          value={font}
          onChange={(e) => handleChangeFont(e)}
          id="filled-select-currency"
          select
          variant="outlined"
          MenuProps={MenuProps}
        >
          <MenuItem value='Raleway'>
            Raleway
          </MenuItem>
          <MenuItem  value='Caviar'>
            Caviar
          </MenuItem>
          <MenuItem value='Walkway'>
            Walkway
          </MenuItem>
          <MenuItem  value='JetBrains'>
          JetBrains
          </MenuItem>
          <MenuItem  value='Dancing'>
          Dancing
          </MenuItem>
          <MenuItem  value='Vonique'>
          Vonique
          </MenuItem>
          <MenuItem value='Monterey'>
          Monterey
          </MenuItem>
          <MenuItem  value='Titillium'>
          Titillium
          </MenuItem>
          <MenuItem  value='Monoglyceride'>
          Monoglyceride
          </MenuItem>
          <MenuItem   value='Flamenco'>
          Flamenco
          </MenuItem>
          <MenuItem  value='Cinzel'>
          Cinzel
          </MenuItem>
          <MenuItem  value='Optimus'>
          Optimus Princeps
          </MenuItem>
          <MenuItem  value='Neou'>
          Neou
          </MenuItem>
          <MenuItem   value='NK57'>
          NK57 Monospace
          </MenuItem>
          <MenuItem  value='SEGMENT16C'>
          SEGMENT16C
          </MenuItem>
          <MenuItem  value='BPMono'>
          BP Mono
          </MenuItem>
          <MenuItem  value='SpaceMono'>
          Space Mono
          </MenuItem>
          <MenuItem  value='SicretMono'>
          Sicret Mono
          </MenuItem>
          <MenuItem   value='Yoshitoshi'>
          Yoshitoshi
          </MenuItem>
          <MenuItem  value='PiecesOfEight'>
          Pieces Of Eight
          </MenuItem>
          <MenuItem  value='Vogue'>
          Vogue
          </MenuItem>
          <MenuItem value='HalfElven'>
          Half Elven
          </MenuItem>
          <MenuItem  value='Gatsby'>
          Gatsby
          </MenuItem>
          <MenuItem  value='LifeSavers'>
          Life Savers
          </MenuItem>
          <MenuItem  value='Lato'>
          Lato
          </MenuItem>
          <MenuItem  value='OpenSans'>
          Open Sans
          </MenuItem>
          <MenuItem  value='ChampagneLimousines'>
          Champagne Limousines
          </MenuItem>
          <MenuItem  value='Ubuntu'>
          Ubuntu
          </MenuItem>
          <MenuItem  value='Cabin'>
          Cabin
          </MenuItem>
          <MenuItem  value='Hind'>
          Hind
          </MenuItem>
          <MenuItem  value='Kanit'>
          Kanit
          </MenuItem>
          <MenuItem  value='Capoon'>
          Capoon
          </MenuItem>
          <MenuItem  value='Abenda'>
          Abenda
          </MenuItem>
          <MenuItem  value='KenyanCoffee'>
          Kenyan Coffee
          </MenuItem>
          <MenuItem  value='LJDesignStudiosIs'>
          LJ Design Studios Is
          </MenuItem>
          <MenuItem  value='Karla'>
          Karla
          </MenuItem>
          <MenuItem  value='Sharpe'>
          Sharpe
          </MenuItem>
          <MenuItem  value='ForgottenFuturist'>
          Forgotten Futurist
          </MenuItem>
          <MenuItem  value='UbicadaPro'>
          Ubicada Pro
          </MenuItem>
          <MenuItem  value='Aniron'>
          Aniron
          </MenuItem>
          <MenuItem  value='Playfair'>
          Playfair
          </MenuItem>
          <MenuItem  value='Alexandria'>
          Alexandria
          </MenuItem>
          <MenuItem  value='Rufina'>
          Rufina
          </MenuItem>
          <MenuItem  value='Lusitana'>
          Lusitana
          </MenuItem>
          <MenuItem  value='AlegreyaSC'>
          Alegreya SC
          </MenuItem>
          <MenuItem  value='Delia'>
          Delia
          </MenuItem>
          <MenuItem  value='Domine'>
          Domine
          </MenuItem>
          <MenuItem  value='Vollkorn'>
          Vollkorn
          </MenuItem>
        </Select>
        </Grid>
        <br/>
      <TextDecorateButtons/>
      <br/>

<Accordion>
<AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={classes2.heading} ><h3 style={{width: '100%',textAlign:"center",margin:'10px'}}>Background</h3>
</div>
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
          <div className={classes2.heading} ><h3 style={{width: '100%',textAlign:"center",margin:'10px'}}>Background header</h3></div>
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
          <div className={classes2.heading} ><h3 style={{width: '100%',textAlign:"center",margin:'10px'}}>Background main</h3></div>
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
