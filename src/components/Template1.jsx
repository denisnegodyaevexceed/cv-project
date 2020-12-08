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
      >
        <div style={{ width: "595px", height: "420px" }}>
          <div className="template-1">
            <div className="head-1">
            <div className="bg1">sd</div>

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
                  <h4>Technical skills</h4>
                  <div className="first">
                    {frontend&&<h5>Frontend</h5>}
                    <div>{frontend.split(' ').map((item, index) => {
                      return <div key={index}>{item}</div>
                    })}</div>
                  </div>
                  <div>
                    {backend&&<h5>Backend</h5>}
                    <div>{backend.split(' ').map((item, index) => {
                      return <div key={index}>{item}</div>
                    })}</div>
                  </div>
                  <div>
                    {dbs&&<h5>DBS</h5>}
                    <div>{dbs.split(' ').map((item, index) => {
                      return <div key={index}>{item}</div>
                    })}</div>
                  </div>
                  <div>
                    {other&&<h5>Other</h5>}
                      <div>{other.split(' ').map((item, index) => {
                      return <div key={index}>{item}</div>
                    })}</div>
                  </div>
                  {userInfo.email && <div>
                    <h4>Contact details</h4>
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
                    <h4>Personal Profile</h4>
                    <div className="text">
                     {userInfo.aboutMeInfo}
                    </div>
                  </div>
                {((firstCompany&&firstPosition&&firstDescription) || (secondCompany&&secondPosition&&secondDescription))&& <div>
                  <div>
                    <h4>Work History</h4>
                    {firstCompany && <h5>{firstCompany.toUpperCase()}</h5>}
        {firstPosition && <h6>{firstPosition}</h6>}
                    {firstDescription &&<div className="text">
                      {firstDescription}
                    </div>}
                  </div>
                  <div>
                    {secondCompany&&<h5>{secondCompany.toUpperCase()}</h5>}
                        {secondPosition&&<h6>{secondPosition}</h6>}
                    {secondDescription&&<div className="text">
                          {secondDescription}
                    </div>}
                  </div>
                  </div>}
                  {userInfo.education && <div>
                    <h4>Education History</h4>
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
            <div className="bg1">sd</div>
              
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
                    
<h2 className="context">PORTFOLIO</h2>
                    <div className='projects'>
                    {projects.map((item, index) => {
                      let {name, link, summary, whatYouDo, stack} = item
                      return ( name && link && summary && whatYouDo && stack && <div className='project' key={index}>
                        <h4>{name.toUpperCase()}</h4>
                          <h5>{link}</h5>
                          <div className="other-text">
                            <h5>Summary:</h5> 
                            {summary}
                          </div>
                          <div className="other-text">
                           <h5>What i did here: </h5>
                           {whatYouDo}
                          </div>
                          <div className="other-text">
                            <h5>Stack:</h5>
                            {stack}
                          </div>
                        </div>)
                    })}
                   </div> 
              {/* <div className="other-left-info-1">

                {firstProject.name && firstProject.link && firstProject.summary && firstProject.whatYouDo && firstProject.stack &&<div >
                <h4>{firstProject.name.toUpperCase()}</h4>
                  <h5>{firstProject.link}</h5>
                  <div className="other-text">
                    <h5>Summary:</h5> 
                    {firstProject.summary}
                  </div>
                  <div className="other-text">
                   <h5>What i did here: </h5>
                   {firstProject.whatYouDo}
                  </div>
                  <div className="other-text">
                    <h5>Stack:</h5>
                    {firstProject.stack}
                  </div>
                </div>}
                {thirdProject.name && thirdProject.link && thirdProject.summary && thirdProject.whatYouDo && thirdProject.stack && <div >
                  <h4>{thirdProject.name.toUpperCase()}</h4>
                  <h5>{thirdProject.link}</h5>
                  <div className="other-text">
                  <h5>Summary:</h5>
                    {thirdProject.summary}
                  </div>
                  <div className="other-text">
                  <h5>What i did here: </h5>
                    {thirdProject.whatYouDo}
                  </div>
                  <div className="other-text">
                  <h5>Stack:</h5>
                    {thirdProject.stack}
                  </div>
                </div>}
                
              </div>
              <div className="other-right-info-1">
              {secondProject.name && secondProject.link && secondProject.summary && secondProject.whatYouDo && secondProject.stack && <div>
                  <h4>{secondProject.name.toUpperCase()}</h4>
                  <h5>{secondProject.link}</h5>
                  <div className="other-text">
                    <h5>Summary:</h5>
                    {secondProject.summary}
                  </div>
                  <div className="other-text">
                    <h5>What i did here: </h5>
                    {secondProject.whatYouDo}
                  </div>
                  <div className="other-text">
                    <h5>Stack:</h5>
                    {secondProject.stack}
                  </div>
                </div>}
               
                {fourthProject.name && fourthProject.link && fourthProject.summary && fourthProject.whatYouDo && fourthProject.stack && <div >
                  <h4>{fourthProject.name.toUpperCase()}</h4>
                  <h5>{fourthProject.link}</h5>
                  <div className="other-text">
                  <h5>Summary:</h5>
                    {fourthProject.summary}
                  </div>
                  <div className="other-text">
                  <h5>What i did here: </h5>
                   {fourthProject.whatYouDo}
                  </div>
                  <div className="other-text">
                  <h5>Stack:</h5>
                    {fourthProject.stack}
                  </div>
                </div>}
              </div> */}
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
