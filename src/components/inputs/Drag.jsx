import React, { useState } from 'react';
import { PDFExport } from "@progress/kendo-react-pdf";
import { useSelector} from "react-redux";
import {
    Button,
    Container,
    Grid,
} from "@material-ui/core";
import DragHeader from './DragHeader'
import DragBody from './DragBody'

const Drag = () => {
    const {firstCompany, firstPosition, firstDescription, secondCompany, secondPosition, secondDescription} = useSelector( state => state.aboutWorkHistoryReducer)
    const {frontend, backend, dbs, other} = useSelector(state => state.aboutHardSkillsReducer)
    const {firstProject, secondProject, thirdProject, fourthProject, fifthProject, sixthProject} = useSelector(state => state.portfolioReducer)
    const projects = [firstProject, secondProject, thirdProject, fourthProject, fifthProject, sixthProject]
    const userInfo = useSelector((state) => state.aboutMeReducer);
    
    let pdfExportComponent;



    const [isPDF, setIsPDF] = useState(false);

    const pdfExport = () => {
        setIsPDF(true);
        pdfExportComponent.save();
        setTimeout(() => {
            setIsPDF(false); 
        }, 50);
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
        </Container>
    );
}
export default Drag