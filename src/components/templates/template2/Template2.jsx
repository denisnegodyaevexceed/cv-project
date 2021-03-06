import "./Template2.css";
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


function Template2 () {
  const storage = firebase.storage()
  let pdfExportComponent;
  const userInfo = useSelector((state) => state.aboutMeReducer);
  const userWorkHistory = useSelector((state) => state.aboutWorkHistoryReducer);
  const dispatch = useDispatch();

  const [cls2, setCls2] = useState(["side2"]);
  const [open2, setOpen2] = useState(true);

  useEffect(() => {
    if (open2) {
      setCls2((oldArr) => [...oldArr, "open2"]);
    } else {
      setCls2(["side2"]);
    }
  }, [open2]);

  const {
    firstCompany,
    firstPosition,
    firstDescription,
    secondCompany,
    secondPosition,
    secondDescription,
  } = useSelector((state) => state.aboutWorkHistoryReducer);

  const { frontend, backend, dbs, other } = useSelector(
    (state) => state.aboutHardSkillsReducer
  );

  const {
    firstProject,
    secondProject,
    thirdProject,
    fourthProject,
  } = useSelector((state) => state.portfolioReducer);

  const projects = createProjectsArray(useSelector((state) => state.portfolioReducer))

  const userAboutHardSkills = { frontend, backend, dbs, other }
  const userInfoPortfolio = useSelector((state) => state.portfolioReducer);
  const addTechArr = useSelector((state) => state.addTechnologyReducer);
  const {customizedTemplateUid} = useSelector((state) => state.customizedTemplateReducer);

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
                      saveTemplate(2, userInfo, addTechArr, userInfoPortfolio, userAboutHardSkills,userWorkHistory, customizedTemplateUid,allCustomizedTemplateActions, disp, handleUploadAvatar);
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
          <div className="template-2">
            <div className="head-2">
              <div
                className="avatar-2"
                style={{
                  backgroundImage: `url(${
                    userInfo.avatar ? userInfo.avatar : "./public_images/user.png"
                  })`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: `${userInfo.avatarHorizontal}% ${userInfo.avatarVertical}%`,
                  width: 220,
                  height: 220,
                  margin: "auto",
                }}
              ></div>
              <div className="content-head-2">
                <div className="name-2">
                  {userInfo.firstName + " " + userInfo.secondName}
                </div>
                <div className="post-2">
                  {userInfo.careerObjective.toUpperCase()}
                </div>
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
                        {frontend.length > 0 && (
                          <div className="title-2">-Frontend development</div>
                        )}
                        <div>
                          {frontend.map((item, index) => {
                            return <div key={index}>{item.title}</div>;
                          })}
                        </div>
                      </div>
                      <div className="db-2">
                        {dbs.length > 0 && (
                          <div className="title-2">-Databases</div>
                        )}
                        <div>
                          {backend.map((item, index) => {
                            return <div key={index}>{item.title}</div>;
                          })}
                        </div>
                      </div>
                      <div className="backend-2">
                        {backend.length > 0 && (
                          <div className="title-2">-Backend</div>
                        )}
                        <div>
                          {backend.map((item, index) => {
                            return <div key={index}>{item.title}</div>;
                          })}
                        </div>
                      </div>
                      <div className="other-2">
                        {other.length > 0 && (
                          <div className="title-2">-Other</div>
                        )}
                        <div>
                          {dbs.map((item, index) => {
                            return <div key={index}>{item.title}</div>;
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="languages-2">
                    <div className="title-other-skils-2">LANGUAGES</div>
                    <div className="content-other-skils-2">
                      {" "}
                      {userInfo.languages}
                    </div>
                  </div>
                  {userInfo.email && (
                    <div className="contacts-2">
                      <div className="title-contacts-2">CONTACTS</div>
                      <div className="content-contacts-2">
                        <div>
                          <strong className="h4-2-2">Email:</strong>{" "}
                          {userInfo.email}
                        </div>
                        {userInfo.vkontakte && (
                          <div>
                            <strong className="h4-2-2">Vkontakte:</strong>{" "}
                            {userInfo.vkontakte}
                          </div>
                        )}
                        {userInfo.skype && (
                          <div>
                            <strong className="h4-2-2">Skype:</strong>{" "}
                            {userInfo.skype}
                          </div>
                        )}
                        {userInfo.phoneNumber && (
                          <div>
                            <strong className="h4-2-2">Tel:</strong>{" "}
                            {userInfo.phoneNumber}
                          </div>
                        )}
                        {userInfo.github && (
                          <div>
                            <strong className="h4-2-2">GitHub:</strong>{" "}
                            {userInfo.github}
                          </div>
                        )}
                        {userInfo.facebook && (
                          <div>
                            <strong className="h4-2-2">Facebook:</strong>{" "}
                            {userInfo.facebook}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className="right-content-2">
                  <div className="education-2">
                    <div>
                      <div className="title-right-2">EDUCATION</div>
                    </div>

                    <div className="content-edu-2">{userInfo.education}</div>
                  </div>
                  {((firstCompany && firstPosition && firstDescription) ||
                    (secondCompany && secondPosition && secondDescription)) && (
                    <div className="work-exp-2">
                      <div>
                        <div className="title-right-2">WORK HISTORY</div>
                        {firstCompany && (
                          <div className="title-2">
                            {firstCompany.toUpperCase()}
                          </div>
                        )}
                        {firstPosition && (
                          <div className="title-2">{firstPosition}</div>
                        )}
                        {firstDescription && (
                          <div className="content-work-2">
                            {firstDescription}
                          </div>
                        )}
                      </div>
                      <div>
                        {secondCompany && (
                          <div className="title-2">
                            {secondCompany.toUpperCase()}
                          </div>
                        )}
                        {secondPosition && (
                          <div className="title-2">{secondPosition}</div>
                        )}
                        {secondDescription && (
                          <div className="content-work-2">
                            {secondDescription}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          {isHavePortfolio(
            firstProject, 
            secondProject, 
            thirdProject, 
            fourthProject
            ) && (
            <div className="template-2-2 page-break">
              <div className="portfolio-container-2">
                <div className="k1"></div>
                <div className="title-portfolio-2">PORTFOLIO</div>
                <div className="portfolio-cases-2">
                  {projects.map((item, index) => {
                    let { name, link, summary, whatYouDo, stack } = item;
                    return (
                      name &&
                      link &&
                      summary &&
                      whatYouDo &&
                      stack && (
                        <div className="case-2" key={index}>
                          <div className="title-case-2">
                            {name.toUpperCase() + " - " + link}
                          </div>
                          <div className="summary-2">
                            <div className="title-con-2">Summary:</div>
                            {summary}
                          </div>
                          <div className="what-2">
                            <div className="title-con-2">What i did here: </div>
                            {whatYouDo}
                          </div>
                          <div className="">
                            <div className="title-con-2">Stack:</div>
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
                <div className="k"></div>
              </div>
            </div>
          )}
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
        {!open2 ? null : (
          <div className="side-close2" onClick={() => setOpen2(!open2)}></div>
        )}
      </div>
    </div>
  );
};

export default Template2;
