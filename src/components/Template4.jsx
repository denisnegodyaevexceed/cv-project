import React from "react";
import "./Template4.css";
import { PDFExport } from "@progress/kendo-react-pdf";
import {Link} from 'react-router-dom'
import Button from "@material-ui/core/Button";
import { useSelector} from "react-redux";

const Template4 = () => {
    let pdfExportComponent;

    const userInfo = useSelector((state) => state.aboutMeReducer);
    const {firstCompany, firstPosition, firstDescription, secondCompany, secondPosition, secondDescription} = useSelector( state => state.aboutWorkHistoryReducer)
    
    const {frontend, backend, dbs, other} = useSelector(state => state.aboutHardSkillsReducer)
  
    const {firstProject, secondProject, thirdProject, fourthProject, fifthProject, sixthProject} = useSelector(state => state.portfolioReducer)
  
    const projects = [firstProject, secondProject, thirdProject, fourthProject, fifthProject, sixthProject]
  
   console.log(firstProject.stack, 'sgsdfgsdfgsdfgdsfg')
    const isHavePortfolio = ((firstProject.name && firstProject.link && firstProject.summary && firstProject.whatYouDo && firstProject.stack) ||
    (secondProject.name && secondProject.link && secondProject.summary && secondProject.whatYouDo && secondProject.stack) ||
    (thirdProject.name && thirdProject.link && thirdProject.summary && thirdProject.whatYouDo && thirdProject.stack) ||
    (fourthProject.name && fourthProject.link && fourthProject.summary && fourthProject.whatYouDo && fourthProject.stack))
    console.log(1,userInfo)
  return (
    <div className='page'>
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
        to="/steps"
        component={Link}
        variant="contained" 
        color="secondary">
          Изменить
        </Button>
      </div>
      <PDFExport
        forcePageBreak=".page-break"
        ref={(component) => (pdfExportComponent = component)}
        
      >
      <div className="template-4">
        <img className="header-4" src="./template4.1.png" alt="" />
        <div className="content-4">
          <div className="left-info-4">
            <div className="name-4 h-4-m">
        <div className="firstname-4">{userInfo.firstName}</div>
              <div className="lastname-4">{userInfo.secondName}</div>
            </div>
            <div className="profile-4">
              <div className="title-profile-4 h-4-b">Profile:</div>
              {userInfo.aboutMeInfo}
            </div>
            <div className="languages-4">
              <div className="title-languages-4 h-4-b">Languages:</div>
              {userInfo.languages}
            </div>
            <div className="skills-4">
              <div className="title-skills-4 h-4-b">Skills:</div>
              {frontend.map((item, index)=>{
                              return <span key={index}>{item.title}{frontend.length-1===index? ' | ': ' | '}</span>
                            })}
              {backend.map((item, index)=>{
                              return <span key={index}>{item.title}{backend.length-1===index? ' | ': ' | '}</span>
                            })}
              {dbs.map((item, index)=>{
                              return <span key={index}>{item.title}{dbs.length-1===index? ' | ': ' | '}</span>
                            })}
              {other.map((item, index)=>{
                              return <span key={index}>{item.title}{other.length-1===index? ' | ': ' | '}</span>
                            })}
            </div>
            <div className="contacts-4">
              <div className="title-contacts-4 h-4-b">Contacts</div>
              <div><strong className='h4-4'>Email:</strong> {userInfo.email}</div>
                    {userInfo.skype && <div><strong className='h4-4'>Skype:</strong> {userInfo.skype}</div>}
                    {userInfo.vkontakte && <div><strong className='h4-4'>Vkontakte:</strong> {userInfo.vkontakte}</div>}
                    {userInfo.github && <div><strong className='h4-4'>GitHub:</strong> {userInfo.github}</div>}
                    {userInfo.phoneNumber && <div><strong className='h4-4'>Tel:</strong> {userInfo.phoneNumber}</div>}
                    {userInfo.facebook && <div><strong className='h4-4'>Facebook:</strong> {userInfo.facebook}</div>}
            </div>
          </div>
          <div className="right-info-4">
          <div className="ava-4" style={{backgroundImage: `url(${userInfo.avatar? userInfo.avatar: './user.png'})`,backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: 250,
                        height: 300,
                        margin: "auto"}}></div>
                        <div className="content-right">
            <div className="edu-4">
                <div className="title-edu-4 h-4-b">Education</div>
            {userInfo.education}
                <div className="content-edu-4"></div>
            </div>
            {((firstCompany&&firstPosition&&firstDescription) || (secondCompany&&secondPosition&&secondDescription))&& <div className="projects-4">
                  <div>
                    <div className='title-projects-4 h-4-b'>Projects</div>
                    {firstCompany && <div className='company-4 h4-4'>{firstCompany.toUpperCase()}</div>}
        {firstPosition && <div className='position-company-4 h4-4'>{firstPosition}</div>}
                    {firstDescription &&<div className="content-work-4">
                      {firstDescription}
                    </div>}
                  </div>
                  <div>
                    {secondCompany&&<div className='company-4 h4-4'>{secondCompany.toUpperCase()}</div>}
                        {secondPosition&&<div className='position-company-4 h4-4'>{secondPosition}</div>}
                    {secondDescription&&<div className="content-work-4">
                          {secondDescription}
                    </div>}
                  </div>
                  </div>}
            </div>
          </div>
        </div>

        <img className="footer-4" src="./template4.2.png" alt="" />
      </div>
      <br/>
      {isHavePortfolio && <div className="template-4 page-break">
        <img className="header-4" src="./template4.1.png" alt="" />
        <div className="title-portfolio-4">PORTFOLIO</div>

        <div className="content-4">
            
        <div className='portfolio-cases-4'>
                    {projects.map((item, index) => {
                      let {name, link, summary, whatYouDo, stack} = item
                      return ( name && link && summary && whatYouDo && stack && <div className='case-4' key={index}>
                        <div className='title-case-4'>{name.toUpperCase()+' - '+link}</div>
                          {/* <h5>{link}</h5> */}
                          <div className="summary-4">
                            <div className='title-con-4'>Summary:</div> 
                            {summary}
                          </div>
                          <div className="what-4">
                           <div className='title-con-4'>What i did here: </div>
                           {whatYouDo}
                          </div>
                          <div className="">
                            <div className='title-con-4'>Stack:</div> 
                            {stack.map((item, index)=>{
                              return <span className='span-4' key={index}>{item.title}{stack.length-1===index? '.': ', '}</span>
                            })}
                          </div>
                        </div>)
                    })}
                   </div> 
        </div>

        <img className="footer-4" src="./template4.2.png" alt="" />
      </div>}
      </PDFExport>
    </div>
  );
};

export default Template4;
