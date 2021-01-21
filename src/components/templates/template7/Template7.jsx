import React, { useState, useEffect } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import "./Template7.css";
import AboutMe from "../../inputs/AboutMe";
import Portfolio from "../../inputs/Portfolio";
import AboutWorkHistory from "../../inputs/AboutWorkHistory";
import { Link } from "react-router-dom";
import AboutHardSkills from "../../inputs/AboutHardSkills";
import Tooltip from "@material-ui/core/Tooltip";
import isHavePortfolio from "../../../utilites/IsHavePortfolio";
import createProjectsArray from "../../../utilites/createProjectArray";
import firebase from "firebase";
import allAboutMeActions from "../../../actions/aboutMeActions";
import saveTemplate from "../../../utilites/saveTemplate";
import allCustomizedTemplateActions from "../../../actions/customizedTemplateActions";




function Template7 () {
  let pdfExportComponent;
  const storage = firebase.storage()
  const { frontend, backend, dbs, other } = useSelector(
    (state) => state.aboutHardSkillsReducer
  );
  const userInfo = useSelector((state) => state.aboutMeReducer);
  const dispatch = useDispatch();
  const addTechArr = useSelector((state) => state.addTechnologyReducer);
  const userAboutHardSkills = { frontend, backend, dbs, other }
  const userInfoPortfolio = useSelector((state) => state.portfolioReducer);
  const {customizedTemplateUid} = useSelector((state) => state.customizedTemplateReducer);
  const userWorkHistory = useSelector((state) => state.aboutWorkHistoryReducer);

  const {
    firstCompany,
    firstPosition,
    firstDescription,
    secondCompany,
    secondPosition,
    secondDescription,
  } = useSelector((state) => state.aboutWorkHistoryReducer);

  

  const disp = (allCustomizedTemplateActions,key) => {
    dispatch(
      allCustomizedTemplateActions.setCustomTemplateUidAction(key)
    );
   }

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

  const {
    firstProject,
    secondProject,
    thirdProject,
    fourthProject,
  } = useSelector((state) => state.portfolioReducer);

  const projects = createProjectsArray(useSelector((state) => state.portfolioReducer))

  const [cls2, setCls2] = useState(["side2"]);

  const [open2, setOpen2] = useState(true);

  useEffect(() => {
    if (open2) {
      setCls2((oldArr) => [...oldArr, "open2"]);
    } else {
      setCls2(["side2"]);
    }
  }, [open2]);

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
          >
            Change Template
          </Button>
          <Tooltip title="Save template">
                  <Button
                    variant="contained"
                    color="secondary"
                    className="k-button"
                    onClick={() => {
                      saveTemplate(7, userInfo, addTechArr, userInfoPortfolio, userAboutHardSkills,userWorkHistory, customizedTemplateUid,allCustomizedTemplateActions, disp, handleUploadAvatar);
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
          <div className="template7">
            <div className="template7__firstPage">
              <div className="template7__leftColumn">
                <div
                  className="template7__avatar"
                  style={{
                    backgroundImage: `url(${
                      userInfo.avatar ? userInfo.avatar : "./public_images/user.png"
                    })`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: `${userInfo.avatarHorizontal}% ${userInfo.avatarVertical}%`,
                    width: 120,
                    height: 120,
                    borderRadius: 300,
                  }}
                ></div>
                {userInfo.aboutMeInfo && (
                  <div className="template7__personalProfile">
                    <div className="template7__personalProfile_header template7__title">
                      About Me
                    </div>
                    <div className="template7__personalProfile_body">
                      {userInfo.aboutMeInfo}
                    </div>
                  </div>
                )}

                <div className="template7__stack">
                  <div className="template7__stack_header template7__title">
                    Skills
                  </div>
                  <div className="template7__stack_body">
                    <div className="template7__frontend">
                      <div>
                        {frontend.length > 0 && (
                          <div className="template7__skills_subtitle">
                            Frontend
                          </div>
                        )}
                        <div>
                          {frontend.map((item, index) => {
                            return <div key={index}>{item.title}</div>;
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="template7__backend">
                      <div>
                        {backend.length > 0 && (
                          <div className="template7__skills_subtitle">
                            Backend
                          </div>
                        )}
                        <div>
                          {backend.map((item, index) => {
                            return <div key={index}>{item.title}</div>;
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="template7__dbs">
                      <div>
                        {dbs.length > 0 && (
                          <div className="template7__skills_subtitle">DBS</div>
                        )}
                        <div>
                          {dbs.map((item, index) => {
                            return <div key={index}>{item.title}</div>;
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="template7__other">
                      <div>
                        {other.length > 0 && (
                          <div className="template7__skills_subtitle">
                            Other
                          </div>
                        )}
                        <div>
                          {other.map((item, index) => {
                            return <div key={index}>{item.title}</div>;
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="template7__conctacts">
                  <div className="template7__cotacts_header template7__title">
                    Contacts
                  </div>
                  <div>Email: {userInfo.email}</div>
                  {userInfo.vkontakte && (
                    <div>Vkontakte: {userInfo.vkontakte}</div>
                  )}
                  {userInfo.skype && <div>Skype: {userInfo.skype}</div>}
                  {userInfo.phoneNumber && (
                    <div>Phone number: {userInfo.phoneNumber}</div>
                  )}
                  {userInfo.github && <div>Github: {userInfo.github}</div>}
                  {userInfo.facebook && (
                    <div>Facebook: {userInfo.facebook}</div>
                  )}
                </div>
              </div>
              <div className="template7__rightColumn">
                <div className="template7__userInfo">
                  <div className="template7__fullName">
                    {userInfo.firstName.toUpperCase() +
                      " " +
                      userInfo.secondName.toUpperCase()}
                  </div>
                  <div className="template7__posistion">
                    {userInfo.careerObjective.toUpperCase()}
                  </div>
                </div>
                {((firstCompany && firstPosition && firstDescription) ||
                  (secondCompany && secondPosition && secondDescription)) && (
                  <div className="template7__workHistory">
                    <div className="template7__workHistory_header template7__title">
                      Work History
                    </div>
                    <div className="template7__workPlace">
                      <div className="template7__workplace_company">
                        {firstCompany}
                      </div>
                      <div className="template7__workplace_position">
                        {firstPosition}
                      </div>
                      <div className="template7__workplace_description">
                        {firstDescription}
                      </div>
                    </div>
                    <div className="template7__workPlace">
                      <div className="template7__workplace_company">
                        {secondCompany}
                      </div>
                      <div className="template7__workplace_position">
                        {secondPosition}
                      </div>
                      <div className="template7__workplace_description">
                        {secondDescription}
                      </div>
                    </div>
                  </div>
                )}
                {userInfo.education && (
                  <div className="template7__education">
                    <div className="template7__education_header template7__title">
                      Education
                    </div>
                    <div className="template7__education_body">
                      {userInfo.education}
                    </div>
                  </div>
                )}
                {userInfo.languages && (
                  <div className="template7__languages">
                    <div className="template7__languages-header template7__title">
                      Languages:
                    </div>
                    {userInfo.languages}
                  </div>
                )}
              </div>
            </div>
            {isHavePortfolio(
              firstProject, 
              secondProject, 
              thirdProject, 
              fourthProject
              ) && (
              <div className="template7__secondPage page-break">
                <div className="template7__secondPage_title">Portfolio</div>
                <div className="template7__projects">
                  {projects.map((item, index) => {
                    let { name, link, summary, whatYouDo, stack } = item;
                    return (
                      name &&
                      summary &&
                      whatYouDo &&
                      stack && (
                        <div key={index} className="template7__project">
                          <div className="template7__project_title template7__title">
                            {name.toUpperCase()}
                            {link && (
                              <div className="template7__project_link">
                                {link.toUpperCase()}
                              </div>
                            )}
                          </div>

                          <div className="template7__project_summary">
                            <div>Summary:</div>
                            {summary}
                          </div>
                          <div className="template7__project_whatYouDo">
                            <div>What i did here</div>
                            {whatYouDo}
                          </div>
                          <div className="template7__project_stack">
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
            )}
          </div>
        </PDFExport>
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
      </div>
      {!open2 ? null : (
        <div className="side-close2" onClick={() => setOpen2(!open2)}></div>
      )}
    </div>
  );
};

export default Template7;
