import React, { useState,useEffect } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';
import { useSelector} from "react-redux";
import AboutMe from "./inputs/aboutMe";
import Portfolio from "./inputs/portfolio";
import AboutWorkHistory from "./inputs/aboutWorkHistory";
import AboutHardSkills from "./inputs/aboutHardSkills";
import './template8.scss';
import {
    Paper,
} from '@material-ui/core';
const Template8 = () => {
    let pdfExportComponent;
    const userInfo = useSelector((state) => state.aboutMeReducer);
    const {firstCompany, firstPosition, firstDescription, secondCompany, secondPosition, secondDescription} = useSelector( state => state.aboutWorkHistoryReducer)
    const {frontend, backend, dbs, other} = useSelector(state => state.aboutHardSkillsReducer)
    const {firstProject, secondProject, thirdProject, fourthProject, fifthProject, sixthProject} = useSelector(state => state.portfolioReducer)
    const projects = [firstProject, secondProject, thirdProject, fourthProject, fifthProject, sixthProject]

    const isHavePortfolio = ((firstProject.name && firstProject.link && firstProject.summary && firstProject.whatYouDo && firstProject.stack) ||
        (secondProject.name && secondProject.link && secondProject.summary && secondProject.whatYouDo && secondProject.stack) ||
        (thirdProject.name && thirdProject.link && thirdProject.summary && thirdProject.whatYouDo && thirdProject.stack) ||
        (fourthProject.name && fourthProject.link && fourthProject.summary && fourthProject.whatYouDo && fourthProject.stack))

    const [cls2, setCls2] = useState(["side2"]);
    const [open2, setOpen2] = useState(true);
    
    useEffect(() => {
        if (open2) {
        setCls2((oldArr) => [...oldArr, "open2"]);
        } else {
            setCls2(['side2']);
        }
    }, [open2]);

    return (
        <div className="page">
            <div className="container-pdf">
                <div className="button5">
                    <Button
                        variant="contained"
                        color="secondary"
                        className="k-button"
                        onClick={() => {
                            (userInfo.firstName&&userInfo.secondName&&userInfo.careerObjective) && pdfExportComponent.save();
                        }}
                    >
                        to PDF
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        className="k-button"
                        to="/templates" component={Link}
                    >
                        Change Template
                    </Button>
                </div>
                <PDFExport
                    forcePageBreak=".page-break"
                    ref={(component) => (pdfExportComponent = component)}
                    fileName={`${userInfo.firstName + userInfo.secondName + userInfo.careerObjective}`}
                >
                    <div>
                        <Paper elevation={3} className='temp8Overlay'>
                            <div className='8Contnet'>
                                123
                            </div>
                        </Paper>
                    </div>
                </PDFExport>
            </div>
            {!open2 ? (<div onClick={() => setOpen2(!open2)} className="arrow"></div>) : (null)}
            <div className={cls2.join(" ")}>
                <AboutMe/>  
                <br/>
                <AboutWorkHistory/>
                <br/>
                <AboutHardSkills/>
                <br/>
                <Portfolio/>
                
            </div>
            {!open2 ? (null) : (<div className="side-close2" onClick={() => setOpen2(!open2)}></div>)}
        </div>
    );
};
export default Template8;