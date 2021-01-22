import React, { useState, useEffect } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AboutMe from "../../inputs/AboutMe";
import Portfolio from "../../inputs/Portfolio";
import AboutWorkHistory from "../../inputs/AboutWorkHistory";
import AboutHardSkills from "../../inputs/AboutHardSkills";
import Tooltip from "@material-ui/core/Tooltip";
import isHavePortfolio from "../../../utilites/IsHavePortfolio";
import createProjectsArray from "../../../utilites/createProjectArray";
import firebase from "firebase";
import allCustomizedTemplateActions from "../../../actions/customizedTemplateActions";
import saveTemplate from "../../../utilites/saveTemplate";
import allAboutMeActions from "../../../actions/aboutMeActions";




function Template1 () {
  const storage = firebase.storage()
  let pdfExportComponent;
  const userInfo = useSelector((state) => state.aboutMeReducer);
  const userWorkHistory = useSelector((state) => state.aboutWorkHistoryReducer);
  const { frontend, backend, dbs, other } = useSelector(
    (state) => state.aboutHardSkillsReducer
  );
  
  const dispatch = useDispatch();
  const addTechArr = useSelector((state) => state.addTechnologyReducer);
  const userAboutHardSkills = { frontend, backend, dbs, other }
  const userInfoPortfolio = useSelector((state) => state.portfolioReducer);

  const {
    firstProject,
    secondProject,
    thirdProject,
    fourthProject,
  } = useSelector((state) => state.portfolioReducer)
  
  const projects = createProjectsArray(useSelector((state) => state.portfolioReducer))
 
  
  const {customizedTemplateUid} = useSelector((state) => state.customizedTemplateReducer);

  const [cls2, setCls2] = useState(["side2"]);
  const [open2, setOpen2] = useState(true);

  useEffect(() => {
    if (open2) {
      setCls2((oldArr) => [...oldArr, "open2"]);
    } else {
      setCls2(["side2"]);
    }
  }, [open2]);


  const handleUploadAvatar = (callback = console.log) => {
    const uploadTask = storage
      .ref(`/images/${userInfo?.fileAvatar?.name}`)
      .put(userInfo?.fileAvatar);
    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
        .ref("images")
        .child(userInfo?.fileAvatar?.name)
        .getDownloadURL()
        .then((urlAvatar) => {
          dispatch(allAboutMeActions.setAvatarAction(urlAvatar, null));
          callback(urlAvatar);
        });
    });
  };

 const disp = (allCustomizedTemplateActions,key) => {
  dispatch(
    allCustomizedTemplateActions.setCustomTemplateUidAction(key)
  );
 }
 const clearId = () => {
  dispatch(allAboutMeActions.setIdClean())
}





  return (
    <div className="page">
      <div className="container-pdf">
        <div className="button5">
          <Tooltip
            title={
              userInfo.firstName &&
              userInfo.secondName &&
              userInfo.careerObjective &&
              userInfo.email &&
              userInfo.emailValid
                ? "Download as PDF"
                : "FirstName, SecondName, YourPosition, Email are required."
            }
          >
            <Button
              variant="contained"
              color="secondary"
              className="k-button"
              onClick={() => {
                userInfo.firstName &&
                  userInfo.secondName &&
                  userInfo.careerObjective &&
                  userInfo.email &&
                  userInfo.emailValid &&
                  pdfExportComponent.save();
              }}
            >
              to PDF
            </Button>
          </Tooltip>
          <Button
            variant="contained"
            color="secondary"
            className="k-button"
            to="/templates"
            component={Link}
            onClick={()=>clearId()}
          >
            Change Template
          </Button>
          <Tooltip title="Save template">
                  <Button
                    variant="contained"
                    color="secondary"
                    className="k-button"
                    onClick={() => {
                      saveTemplate(1, userInfo, addTechArr, userInfoPortfolio, userAboutHardSkills,userWorkHistory, customizedTemplateUid,allCustomizedTemplateActions, disp, handleUploadAvatar);
                    }}
                  >
                    save{customizedTemplateUid}
                  </Button>
                </Tooltip>
        </div>
        <PDFExport
          forcePageBreak=".page-break"
          ref={(component) => (pdfExportComponent = component)}
          fileName={`${
            userInfo.firstName + userInfo.secondName + userInfo.careerObjective
          }`}
        >
          <div style={{ width: "595px", height: "420px" }}>
            <div className="template-1">
              <div className="head-1">
                <div className="bg1"></div>
                <div className="content-head-1">
                  <div className="head-name-1">
                    <div className="name-1">
                      {userInfo.firstName + " " + userInfo.secondName}{" "}
                    </div>
                  </div>
                  <div className="post-1">
                    {userInfo.careerObjective.toUpperCase()}
                  </div>
                </div>
                <div
                  className="avatar-1"
                  style={{
                    backgroundImage: `url(${
                      userInfo.avatar ? userInfo.avatar : "./public_images/user.png"
                    })`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: `${userInfo.avatarHorizontal}% ${userInfo.avatarVertical}%`,
                    width: 190,
                    height: 190,
                    margin: "auto",
                  }}
                ></div>
              </div>
              <div className="main-info-1">
                <div className="left-info-1">
                  <div className="h h4-1">Technical skills</div>
                  <div className="first-info-left-1">
                    <div className="first">
                      <div className="content-center">
                        {frontend.length > 0 && (
                          <div className="h4-1">Frontend:</div>
                        )}
                        <div>
                          {frontend.map((item, index) => {
                            return <div key={index}>{item.title}</div>;
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="first">
                      <div className="content-center">
                        {backend.length > 0 && (
                          <div className="h4-1">Backend:</div>
                        )}
                        <div>
                          {backend.map((item, index) => {
                            return <div key={index}>{item.title}</div>;
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="first">
                      <div className="content-center">
                        {dbs.length > 0 && <div className="h4-1">DBS:</div>}
                        <div>
                          {dbs.map((item, index) => {
                            return <div key={index}>{item.title}</div>;
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="first">
                      <div className="content-center">
                        {other.length > 0 && <div className="h4-1">Other:</div>}
                        <div>
                          {other.map((item, index) => {
                            return <div key={index}>{item.title}</div>;
                          })}
                        </div>
                      </div>
                    </div>

                    <div className="container-laguages">
                      <div className="h4-1-1">Languages</div>
                      <div className="languages-1">{userInfo.languages}</div>
                    </div>
                  </div>
                  {userInfo.email && (
                    <div className="contact">
                      <div className="h-center h4-1">Contact details</div>
                      <div className="contact-content">
                        <div>
                          <strong className="h4-2">Email:</strong>{" "}
                          {userInfo.email}
                        </div>
                        {userInfo.vkontakte && (
                          <div>
                            <strong className="h4-2">Vkontakte:</strong>{" "}
                            {userInfo.vkontakte}
                          </div>
                        )}
                        {userInfo.skype && (
                          <div>
                            <strong className="h4-2">Skype:</strong>{" "}
                            {userInfo.skype}
                          </div>
                        )}
                        {userInfo.phoneNumber && (
                          <div>
                            <strong className="h4-2">Tel:</strong>{" "}
                            {userInfo.phoneNumber}
                          </div>
                        )}
                        {userInfo.github && (
                          <div>
                            <strong className="h4-2">GitHub:</strong>{" "}
                            {userInfo.github}
                          </div>
                        )}

                        {userInfo.facebook && (
                          <div>
                            <strong className="h4-2">Facebook:</strong>{" "}
                            {userInfo.facebook}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className="right-info-1">
                  <div className="first-info-right-1">
                    <div>
                      <div className="h4-1">Personal Profile</div>
                      <div className="text">{userInfo.aboutMeInfo}</div>
                    </div>
                    {((userWorkHistory.firstCompany && userWorkHistory.firstPosition && userWorkHistory.firstDescription) ||
                      (userWorkHistory.secondCompany &&
                        userWorkHistory.secondPosition &&
                        userWorkHistory.secondDescription)) && (
                      <div>
                        <div>
                          <div className="h4-1">Work History</div>
                          {userWorkHistory.firstCompany && (
                            <div className="h4-1">
                              {userWorkHistory.firstCompany.toUpperCase()}
                            </div>
                          )}
                          {userWorkHistory.firstPosition && (
                            <div className="h4-1">{userWorkHistory.firstPosition}</div>
                          )}
                          {userWorkHistory.firstDescription && (
                            <div className="text">{userWorkHistory.firstDescription}</div>
                          )}
                        </div>
                        <div>
                          {userWorkHistory.secondCompany && (
                            <div className="h4-1">
                              {userWorkHistory.secondCompany.toUpperCase()}
                            </div>
                          )}
                          {userWorkHistory.secondPosition && (
                            <div className="h4-1">{userWorkHistory.secondPosition}</div>
                          )}
                          {userWorkHistory.secondDescription && (
                            <div className="text">{userWorkHistory.secondDescription}</div>
                          )}
                        </div>
                      </div>
                    )}
                    {userInfo.education && (
                      <div>
                        <div className="h4-1">Education History</div>
                        <div className="text">{userInfo.education}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <br />
            {isHavePortfolio(
              firstProject, 
              secondProject, 
              thirdProject, 
              fourthProject
              ) && (
              <div className="template-1 page-break">
                <div className="head-1">
                  <div className="bg1"></div>
                  <div className="content-head-1">
                    <div className="head-name-1">
                      <div className="name-1">
                        {userInfo.firstName + " " + userInfo.secondName}
                      </div>
                    </div>
                    <div className="post-1">{userInfo.careerObjective}</div>
                  </div>
                  <div
                    className="avatar-1"
                    style={{
                      backgroundImage: `url(${
                        userInfo.avatar ? userInfo.avatar : "./public_images/user.png"
                      })`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: `${userInfo.avatarHorizontal}% ${userInfo.avatarVertical}%`,
                      width: 190,
                      height: 190,
                      margin: "auto",
                    }}
                  ></div>
                </div>
                <div>
                  <div className="other-info">
                    <div className="context">PORTFOLIO</div>
                    <div className="projects">
                      {projects.map((item, index) => {
                        let { name, link, summary, whatYouDo, stack } = item;
                        return (
                          name &&
                          link &&
                          summary &&
                          whatYouDo &&
                          stack && (
                            <div className="project" key={index}>
                              <div className="h4-1">
                                {name.toUpperCase() + " - " + link}
                              </div>
                              <div className="other-text">
                                <div className="h5-1">Summary:</div>
                                {summary}
                              </div>
                              <div className="other-text">
                                <div className="h5-1">What i did here: </div>
                                {whatYouDo}
                              </div>
                              <div className="other-text">
                                <div className="h5-1">Stack:</div>
                                {stack.map((item, index) => {
                                  return (
                                    <span key={index}>
                                      {item.title}
                                      {stack.length - 1 === index ? "." : ", "}
                                    </span>
                                  );
                                })}
                              </div>
                            </div>
                          )
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </PDFExport>
      </div>
      {!open2 ? (
        <div onClick={() => setOpen2(!open2)} className="arrow"></div>
      ) : null}
      <div className={cls2.join(" ")}>
        <AboutMe />
        <br />
        <AboutWorkHistory />
        <br />
        <AboutHardSkills />
        <br />
        <Portfolio />
      </div>
      {!open2 ? null : (
        <div className="side-close2" onClick={() => setOpen2(!open2)}></div>
      )}
    </div>
  );
};
export default Template1;
