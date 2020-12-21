import "./Template2.css";
import React, { useState,useEffect } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import {Link} from 'react-router-dom'
import Button from "@material-ui/core/Button";
import { useSelector} from "react-redux";
import AboutMe from "./inputs/aboutMe";
import Portfolio from "./inputs/portfolio";
import AboutWorkHistory from "./inputs/aboutWorkHistory";
import AboutHardSkills from "./inputs/aboutHardSkills";


const Template2 = () => {
    let pdfExportComponent;
    const userInfo = useSelector((state) => state.aboutMeReducer);

    const [cls, setCls] = useState(["side1"]);
    const [cls2, setCls2] = useState(["side2"]);
  
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(true);
  
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

    const {firstCompany, firstPosition, firstDescription, secondCompany, secondPosition, secondDescription} = useSelector( state => state.aboutWorkHistoryReducer)
    
    const {frontend, backend, dbs, other} = useSelector(state => state.aboutHardSkillsReducer)
  
    const {firstProject, secondProject, thirdProject, fourthProject, fifthProject, sixthProject} = useSelector(state => state.portfolioReducer)
  
    const projects = [firstProject, secondProject, thirdProject, fourthProject, fifthProject, sixthProject]
  
   console.log(firstProject.stack, 'sgsdfgsdfgsdfgdsfg')
    const isHavePortfolio = ((firstProject.name && firstProject.link && firstProject.summary && firstProject.whatYouDo && firstProject.stack) ||
    (secondProject.name && secondProject.link && secondProject.summary && secondProject.whatYouDo && secondProject.stack) ||
    (thirdProject.name && thirdProject.link && thirdProject.summary && thirdProject.whatYouDo && thirdProject.stack) ||
    (fourthProject.name && fourthProject.link && fourthProject.summary && fourthProject.whatYouDo && fourthProject.stack))
  return (
      <div className="page">
          <div className="button">
        <Button
        
          variant="contained"
          color="secondary"
          className="k-button"
          onClick={() => {
            pdfExportComponent.save();
          }}
        >
          Скачать PDF
        </Button>
        <Button
        variant="contained"
        color="secondary"
        className="k-button"
        to="/templates" component={Link}
        >
          Изменить
        </Button>

      </div>

      <PDFExport
        forcePageBreak=".page-break"
        ref={(component) => (pdfExportComponent = component)}
        fileName={`${userInfo.firstName + userInfo.secondName + userInfo.careerObjective}`}
        
      >
          
    <div className="template-2">
      <div className="head-2">
      <div className="avatar-2" style={{backgroundImage: `url(${userInfo.avatar? userInfo.avatar: './user.png'})`,backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: 220,
                        height: 220,
                        margin: "auto"}}></div>
        <div className="content-head-2">
          <div className="name-2">{userInfo.firstName + ' '+ userInfo.secondName}</div>
          <div className="post-2">{userInfo.careerObjective.toUpperCase()}</div>
          <div className="profile-2">
              <div className="about-2">
                  <div className="title-about-2">PROFESSIONAL PROFILE</div>
                  <div className="content-about-2">
                  {userInfo.aboutMeInfo}
            </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="main-info-2">
          <div className="container-main-2">
        <div className="left-content-2">
            <div className="first-content-2">
                <div className="title-tech">TECH SKILS</div>
          <div className="tech-skills-2">
              <div className="frontend-2">
                  {(frontend.length>0)&&<div className='title-2'>-Frontend development</div>}
                    <div>{frontend.map((item, index) => {
                      return <div key={index}>{item.title}</div>
                    })}</div>
            </div>
            <div className="db-2">
                {(dbs.length>0)&&<div className='title-2'>-Databases</div>}
                    <div>{backend.map((item, index) => {
                      return <div key={index}>{item.title}</div>
                    })}</div>
            </div>
            <div className="backend-2">
                {(backend.length>0)&&<div className='title-2'>-Backend</div>}
                    <div>{backend.map((item, index) => {
                      return <div key={index}>{item.title}</div>
                    })}</div>
            </div>
            <div className="other-2">
                {(other.length>0)&&<div className='title-2'>-Other</div>}
                    <div>{dbs.map((item, index) => {
                      return <div key={index}>{item.title}</div>
                    })}</div>
            </div>
          </div>
          </div>
          <div className="languages-2">
              <div className="title-other-skils-2">LANGUAGES</div>
              <div className="content-other-skils-2"> {userInfo.languages}</div>
          </div>
          {userInfo.email && <div className="contacts-2">
                    <div className='title-contacts-2'>CONTACTS</div>
                    <div className="content-contacts-2">

                    <div><strong className='h4-2-2'>Email:</strong> {userInfo.email}</div>
                    {userInfo.skype && <div><strong className='h4-2-2'>Skype:</strong> {userInfo.skype}</div>}
                    {userInfo.vkontakte && <div><strong className='h4-2-2'>Vkontakte:</strong> {userInfo.vkontakte}</div>}
                    {userInfo.github && <div><strong className='h4-2-2'>GitHub:</strong> {userInfo.github}</div>}
                    {userInfo.phoneNumber && <div><strong className='h4-2-2'>Tel:</strong> {userInfo.phoneNumber}</div>}
                    {userInfo.facebook && <div><strong className='h4-2-2'>Facebook:</strong> {userInfo.facebook}</div>}
                    </div>

                  </div>}
        </div>
        <div className="right-content-2">
          <div className="education-2">
            <div>
              <div className="title-right-2">EDUCATION</div>
            </div>
            
            <div className="content-edu-2">
            {userInfo.education}
            </div>
          </div>
          {((firstCompany&&firstPosition&&firstDescription) || (secondCompany&&secondPosition&&secondDescription))&& <div className="work-exp-2">
                  <div>
                    <div className='title-right-2'>WORK HISTORY</div>
                    {firstCompany && <div className='title-2'>{firstCompany.toUpperCase()}</div>}
        {firstPosition && <div className='title-2'>{firstPosition}</div>}
                    {firstDescription &&<div className="content-work-2">
                      {firstDescription}
                    </div>}
                  </div>
                  <div>
                    {secondCompany&&<div className='title-2'>{secondCompany.toUpperCase()}</div>}
                        {secondPosition&&<div className='title-2'>{secondPosition}</div>}
                    {secondDescription&&<div className="content-work-2">
                          {secondDescription}
                    </div>}
                  </div>
                  </div>}
        </div>
      </div>
      </div>
    </div>
    <br/>
    {isHavePortfolio&& <div className="template-2-2 page-break">
      <div className="portfolio-container-2">
      <div className="k1"></div>
        <div className="title-portfolio-2">PORTFOLIO</div>
        <div className='portfolio-cases-2'>
                    {projects.map((item, index) => {
                      let {name, link, summary, whatYouDo, stack} = item
                      return ( name && link && summary && whatYouDo && stack && <div className='case-2' key={index}>
                        <div className='title-case-2'>{name.toUpperCase()+' - '+link}</div>
                          <div className="summary-2">
                            <div className='title-con-2'>Summary:</div> 
                            {summary}
                          </div>
                          <div className="what-2">
                           <div className='title-con-2'>What i did here: </div>
                           {whatYouDo}
                          </div>
                          <div className="">
                            <div className='title-con-2'>Stack:</div> 
                            {stack.map((item, index)=>{
                              return <span key={index}>{item.title}{stack.length-1===index? '.': ', '}</span>
                            })}
                          </div>
                        </div>)
                    })}
                   </div> 
                   <div className="k"></div>
      </div>
      
    </div>}
    </PDFExport>
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
    </div>
  );
};

export default Template2;
