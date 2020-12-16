import React, { useState } from 'react';
import { PDFExport } from "@progress/kendo-react-pdf";
import { useSelector} from "react-redux";
import {
    Button,
    Container,
    Grid,
} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { makeStyles } from '@material-ui/core/styles';
import { SketchPicker } from 'react-color';

import 'gridstack/dist/gridstack.min.css';
import {GridStack} from 'gridstack';
// THEN to get HTML5 drag&drop
import 'gridstack/dist/h5/gridstack-dd-native';
// OR to get legacy jquery-ui drag&drop
import 'gridstack/dist/jq/gridstack-dd-jqueryui';
import DragHeader from './DragHeader'
import DragBody from './DragBody'


const useStyles3 = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }));

const Drag = () => {
    const {firstCompany, firstPosition, firstDescription, secondCompany, secondPosition, secondDescription} = useSelector( state => state.aboutWorkHistoryReducer)
    const {frontend, backend, dbs, other} = useSelector(state => state.aboutHardSkillsReducer)
    const {firstProject, secondProject, thirdProject, fourthProject, fifthProject, sixthProject} = useSelector(state => state.portfolioReducer)
    const projects = [firstProject, secondProject, thirdProject, fourthProject, fifthProject, sixthProject]
  const userInfo = useSelector((state) => state.aboutMeReducer);

    let [color, setColor] = useState('#fff')
    
    console.log(color, 'color')

    const handleChangeComplete = (color) => {
        setColor(color.hex) ;
      };

    let pdfExportComponent;

    const classes3 = useStyles3()



    const [isPDF, setIsPDF] = useState(false);

    const pdfExport = () => {
        setIsPDF(true);
        pdfExportComponent.save();
        setTimeout(() => {
            setIsPDF(false); 
        }, 500);
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
                </Grid>
                <Grid item xs={12} className={`${isPDF && 'noBorder'}`}>
                <PDFExport
                
                    forcePageBreak=".page-break"
                    ref={(component) => (pdfExportComponent = component)}
                    fileName={`${userInfo.firstName + userInfo.secondName}`+`${userInfo.careerObjective}`}
                    // paperSize="A4"
                >
                    <DragHeader />
                    <DragBody />
                </PDFExport>
                </Grid>
            </Grid>
            
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
            </div>
        </Container>
    );
}
export default Drag