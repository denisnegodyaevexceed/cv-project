import * as React from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import {Link} from 'react-router-dom'
import Button from "@material-ui/core/Button";
import { useSelector} from "react-redux";





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

  console.log(12,frontend)

  return (
    <div className="page">
    <div className="container-pdf">

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
        // paperSize="A4"
      >
        <div style={{ width: "595px", height: "420px" }}>
          <div className="template-1">
            <div className="head-1">
            <div className="bg1"></div>

              <div className="content-head-1">
                <div className="head-name-1">
                  <div className="name-1">{userInfo.firstName + ' '+ userInfo.secondName} </div>
                  {/* <div className="last-name-1">{userInfo.secondName}</div> */}
                </div>
        <div className="post-1">{userInfo.careerObjective}</div>
              </div>
              <div className="avatar-1" style={{backgroundImage: `url(${userInfo.avatar? userInfo.avatar: './user.png'})`,backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: 150,
                        height: 150,
                        margin: "auto"}}></div>
              
            </div>
            <div className="main-info-1">
              <div className="left-info-1">
                <div className="first-info-left-1">
                  <div className='h4-1'>Technical skills</div>
                  <div className="first">
                    {(frontend.length>0)&&<div className='h4-1'>Frontend</div>}
                    <div>{frontend.map((item, index) => {
                      return <div key={index}>{item.title}</div>
                    })}</div>
                  </div>
                  <div>
                    {(backend.length>0)&&<div className='h4-1'>Backend</div>}
                    <div>{backend.map((item, index) => {
                      return <div key={index}>{item.title}</div>
                    })}</div>
                  </div>
                  <div>
                    {(dbs.length>0)&&<div className='h4-1'>DBS</div>}
                    <div>{dbs.map((item, index) => {
                      return <div key={index}>{item.title}</div>
                    })}</div>
                  </div>
                  <div>
                    {(other.length>0)&&<div className='h4-1'>Other</div>}
                      <div>{other.map((item, index) => {
                      return <div key={index}>{item.title}</div>
                    })}</div>
                  </div>
                  {userInfo.email && <div>
                    <div className='h4-1'>Contact details</div>
                    <div>Email: {userInfo.email}</div>
                    {userInfo.skype && <div>Skype: {userInfo.skype}</div>}
                    {userInfo.vkontakte && <div>Vkontakte: {userInfo.vkontakte}</div>}
                    {userInfo.github && <div>GitHub: {userInfo.github}</div>}
                    {userInfo.phoneNumber && <div>Tel: {userInfo.phoneNumber}</div>}
                    {userInfo.facebook && <div>Facebook: {userInfo.facebook}</div>}


                  </div>}
                </div>
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
                        width: 150,
                        height: 150,
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
                          {/* <h5>{link}</h5> */}
                          <div className="other-text">
                            <h5 className='h5-1'>Summary:</h5> 
                            {summary}
                          </div>
                          <div className="other-text">
                           <h5 className='h5-1'>What i did here: </h5>
                           {whatYouDo}
                          </div>
                          <div className="other-text">
                            <h5 className='h5-1'>Stack:</h5>
                            {stack}
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
    </div>
  );
};

export default Template1;
