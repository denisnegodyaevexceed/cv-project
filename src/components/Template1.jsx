import React, { useState,useEffect } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';
import { useSelector} from "react-redux";
import AboutMe from "./inputs/aboutMe";
import Portfolio from "./inputs/portfolio";
import AboutWorkHistory from "./inputs/aboutWorkHistory";
import AboutHardSkills from "./inputs/aboutHardSkills";
import Tooltip from '@material-ui/core/Tooltip';


const Template1 = () => {
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
        <div style={{ width: "595px", height: "420px" }}>
          <div className="template-1">
            <div className="head-1">
            <div className="bg1"></div>
              <div className="content-head-1">
                <div className="head-name-1">
                  <div className="name-1">{userInfo.firstName + ' '+ userInfo.secondName} </div>
                </div>
        <div className="post-1">{userInfo.careerObjective.toUpperCase()}</div>
              </div>
              <div className="avatar-1" style={{backgroundImage: `url(${userInfo.avatar? userInfo.avatar: './user.png'})`,backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: 190,
                        height: 190,
                        margin: "auto"}}></div>
            </div>
            <div className="main-info-1">
              <div className="left-info-1">
              <div className='h h4-1'>Technical skills</div>
                <div className="first-info-left-1">
                  <div className="first">
                    <div className="content-center">
                    {(frontend.length>0)&&<div className='h4-1'>Frontend:</div>}
                    <div>{frontend.map((item, index) => {
                      return <div key={index}>{item.title}</div>
                    })}</div>
                    </div>
                  </div>
                  <div className="first">
                  <div className="content-center">
                    {(backend.length>0)&&<div className='h4-1'>Backend:</div>}
                    <div>{backend.map((item, index) => {
                      return <div key={index}>{item.title}</div>
                    })}</div>
                    </div>
                  </div>
                  <div className="first">
                  <div className="content-center">
                    {(dbs.length>0)&&<div className='h4-1'>DBS:</div>}
                    <div>{dbs.map((item, index) => {
                      return <div key={index}>{item.title}</div>
                    })}</div>
                    </div>
                  </div>
                  <div className="first">
                  <div className="content-center">
                    {(other.length>0)&&<div className='h4-1'>Other:</div>}
                      <div>{other.map((item, index) => {
                      return <div key={index}>{item.title}</div>
                    })}</div>
                    </div>
                  </div>
                  <div className="container-laguages">
                    <div className="h4-1">Languages</div>
                  <div className="languages-1">{userInfo.languages}</div>
                  </div>
                </div>
                {userInfo.email && <div className="contact">
                    <div className='h-center h4-1'>Contact details</div>
                    <div className="contact-content">
                    <div><strong className='h4-2'>Email:</strong> {userInfo.email}</div>
                    {userInfo.vkontakte && <div><strong className='h4-2'>Vkontakte:</strong> {userInfo.vkontakte}</div>}
                    {userInfo.skype && <div><strong className='h4-2'>Skype:</strong> {userInfo.skype}</div>}
                    {userInfo.phoneNumber && <div><strong className='h4-2'>Tel:</strong> {userInfo.phoneNumber}</div>}
                    {userInfo.github && <div><strong className='h4-2'>GitHub:</strong> {userInfo.github}</div>}
                    
                    {userInfo.facebook && <div><strong className='h4-2'>Facebook:</strong> {userInfo.facebook}</div>}
                    </div>
                  </div>}
              </div>
              <div className="right-info-1">
                <div className="first-info-right-1">
                  <div>
                    <div className='h4-1'>Personal Profile</div>
                    <div className="text">
                     {userInfo.aboutMeInfo}
                    </div>
                  </div>
                {((firstCompany&&firstPosition&&firstDescription) || (secondCompany&&secondPosition&&secondDescription))&& <div>
                  <div>
                    <div className='h4-1'>Work History</div>
                    {firstCompany && <div className='h4-1'>{firstCompany.toUpperCase()}</div>}
        {firstPosition && <div className='h4-1'>{firstPosition}</div>}
                    {firstDescription &&<div className="text">
                      {firstDescription}
                    </div>}
                  </div>
                  <div>
                    {secondCompany&&<div className='h4-1'>{secondCompany.toUpperCase()}</div>}
                        {secondPosition&&<div className='h4-1'>{secondPosition}</div>}
                    {secondDescription&&<div className="text">
                          {secondDescription}
                    </div>}
                  </div>
                  </div>}
                  {userInfo.education && <div>
                    <div className='h4-1'>Education History</div>
                    <div className="text">
                      {userInfo.education}
                    </div>
                  </div>}
                </div>
              </div>
            </div>
          </div>
          <br />
          {isHavePortfolio && <div className="template-1 page-break">
            <div className="head-1">
            <div className="bg1"></div>
              <div className="content-head-1">
                <div className="head-name-1">
                <div className='name-1'>{userInfo.firstName + ' '+ userInfo.secondName}</div>
                </div>
                <div className="post-1">{userInfo.careerObjective}</div>
              </div>
              <div className="avatar-1" style={{backgroundImage: `url(${userInfo.avatar? userInfo.avatar: './user.png'})`,backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: 190,
                        height: 190,
                        margin: "auto"}}></div>
            </div>
<div>
            <div className="other-info">
<div className="context">PORTFOLIO</div>
                    <div className='projects'>
                    {projects.map((item, index) => {
                      let {name, link, summary, whatYouDo, stack} = item
                      return ( name && link && summary && whatYouDo && stack && <div className='project' key={index}>
                        <div className='h4-1'>{name.toUpperCase()+' - '+link}</div>
                          <div className="other-text">
                            <div className='h5-1'>Summary:</div> 
                            {summary}
                          </div>
                          <div className="other-text">
                           <div className='h5-1'>What i did here: </div>
                           {whatYouDo}
                          </div>
                          <div className="other-text">
                            <div className='h5-1'>Stack:</div> 
                            {stack.map((item, index)=>{
                              return <span key={index}>{item.title}{stack.length-1===index? '.': ', '}</span>
                            })}
                          </div>
                        </div>)
                    })}
                   </div> 
              </div>
            </div>
          </div>}
        </div>
      </PDFExport>
    </div>
    {!open2 ? (
          <div onClick={() => setOpen2(!open2)} className="arrow">
            
          </div>
        ) : (
          null
        )}
    <div className={cls2.join(" ")}>
       <AboutMe/>
       <br/>
      <AboutWorkHistory/>
       <br/>
       <AboutHardSkills/>
       <br/>
       <Portfolio/>
       
      </div>
      {!open2 ? (
          null
        ) : (
          <div className="side-close2" onClick={() => setOpen2(!open2)}>
          </div>
        )}
    </div>
  );
};
export default Template1;