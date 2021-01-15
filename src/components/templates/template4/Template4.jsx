import React, { useState, useEffect } from "react";
import "./Template4.css";
import { PDFExport } from "@progress/kendo-react-pdf";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import AboutMe from "../../inputs/AboutMe";
import Portfolio from "../../inputs/Portfolio";
import AboutWorkHistory from "../../inputs/AboutWorkHistory";
import { Link } from "react-router-dom";
import AboutHardSkills from "../../inputs/AboutHardSkills";
import Tooltip from "@material-ui/core/Tooltip";

function Template4 () {
  let pdfExportComponent;

  const userInfo = useSelector((state) => state.aboutMeReducer);
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
    fifthProject,
    sixthProject,
  } = useSelector((state) => state.portfolioReducer);

  const projects = [
    firstProject,
    secondProject,
    thirdProject,
    fourthProject,
    fifthProject,
    sixthProject,
  ];

  const [cls2, setCls2] = useState(["side2"]);

  const [open2, setOpen2] = useState(true);

  useEffect(() => {
    if (open2) {
      setCls2((oldArr) => [...oldArr, "open2"]);
    } else {
      setCls2(["side2"]);
    }
  }, [open2]);

  const isHavePortfolio =
    (firstProject.name &&
      firstProject.link &&
      firstProject.summary &&
      firstProject.whatYouDo &&
      firstProject.stack) ||
    (secondProject.name &&
      secondProject.link &&
      secondProject.summary &&
      secondProject.whatYouDo &&
      secondProject.stack) ||
    (thirdProject.name &&
      thirdProject.link &&
      thirdProject.summary &&
      thirdProject.whatYouDo &&
      thirdProject.stack) ||
    (fourthProject.name &&
      fourthProject.link &&
      fourthProject.summary &&
      fourthProject.whatYouDo &&
      fourthProject.stack);

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
        </div>
        <PDFExport
          forcePageBreak=".page-break"
          ref={(component) => (pdfExportComponent = component)}
          fileName={`${
            userInfo.firstName + userInfo.secondName + userInfo.careerObjective
          }`}
        >
          <div className="template-4">
            <img className="header-4" src="./public_images/template4.1.png" alt="headerBackground" />
            <div className="content-4">
              <div className="left-info-4">
                <div className="name-4 h-4-m">
                  <div className="firstname-4">{userInfo.firstName}</div>
                  <div className="lastname-4">{userInfo.secondName}</div>
                </div>
                <div className="name-4 h-4-m">
                  <div className="h-4-a">{userInfo.careerObjective}</div>
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
                  {frontend.map((item, index) => {
                    return (
                      <span key={index}>
                        {item.title}
                        {frontend.length - 1 === index ? " | " : " | "}
                      </span>
                    );
                  })}
                  {backend.map((item, index) => {
                    return (
                      <span key={index}>
                        {item.title}
                        {backend.length - 1 === index ? " | " : " | "}
                      </span>
                    );
                  })}
                  {dbs.map((item, index) => {
                    return (
                      <span key={index}>
                        {item.title}
                        {dbs.length - 1 === index ? " | " : " | "}
                      </span>
                    );
                  })}
                  {other.map((item, index) => {
                    return (
                      <span key={index}>
                        {item.title}
                        {other.length - 1 === index ? " | " : " | "}
                      </span>
                    );
                  })}
                </div>
                <div className="contacts-4">
                  <div className="title-contacts-4 h-4-b">Contacts</div>
                  <div>
                    <strong className="h4-4">Email:</strong> {userInfo.email}
                  </div>
                  {userInfo.vkontakte && (
                    <div>
                      <strong className="h4-4">Vkontakte:</strong>{" "}
                      {userInfo.vkontakte}
                    </div>
                  )}
                  {userInfo.skype && (
                    <div>
                      <strong className="h4-4">Skype:</strong> {userInfo.skype}
                    </div>
                  )}
                  {userInfo.phoneNumber && (
                    <div>
                      <strong className="h4-4">Tel:</strong>{" "}
                      {userInfo.phoneNumber}
                    </div>
                  )}
                  {userInfo.github && (
                    <div>
                      <strong className="h4-4">GitHub:</strong>{" "}
                      {userInfo.github}
                    </div>
                  )}
                  {userInfo.facebook && (
                    <div>
                      <strong className="h4-4">Facebook:</strong>{" "}
                      {userInfo.facebook}
                    </div>
                  )}
                </div>
              </div>
              <div className="right-info-4">
                <div
                  className="ava-4"
                  style={{
                    backgroundImage: `url(${
                      userInfo.avatar ? userInfo.avatar : "./public_images/user.png"
                    })`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: `${userInfo.avatarHorizontal}% ${userInfo.avatarVertical}%`,
                    width: 250,
                    height: 300,
                    margin: "auto",
                  }}
                ></div>
                <div className="content-right">
                  <div className="edu-4">
                    <div className="title-edu-4 h-4-b">Education</div>
                    {userInfo.education}
                    <div className="content-edu-4"></div>
                  </div>
                  {((firstCompany && firstPosition && firstDescription) ||
                    (secondCompany && secondPosition && secondDescription)) && (
                    <div className="projects-4">
                      <div>
                        <div className="title-projects-4 h-4-b">Projects</div>
                        {firstCompany && (
                          <div className="company-4 h4-4">
                            {firstCompany.toUpperCase()}
                          </div>
                        )}
                        {firstPosition && (
                          <div className="position-company-4 h4-4">
                            {firstPosition}
                          </div>
                        )}
                        {firstDescription && (
                          <div className="content-work-4">
                            {firstDescription}
                          </div>
                        )}
                      </div>
                      <div>
                        {secondCompany && (
                          <div className="company-4 h4-4">
                            {secondCompany.toUpperCase()}
                          </div>
                        )}
                        {secondPosition && (
                          <div className="position-company-4 h4-4">
                            {secondPosition}
                          </div>
                        )}
                        {secondDescription && (
                          <div className="content-work-4">
                            {secondDescription}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <img className="footer-4" src="./public_images/template4.2.png" alt="footerBackground" />
          </div>
          <br />
          {isHavePortfolio && (
            <div className="template-4 page-break">
              <img className="header-4" src="./public_images/template4.1.png" alt="headerBackground" />
              <div className="title-portfolio-4">PORTFOLIO</div>

              <div className="content-4">
                <div className="portfolio-cases-4">
                  {projects.map((item, index) => {
                    let { name, link, summary, whatYouDo, stack } = item;
                    return (
                      name &&
                      link &&
                      summary &&
                      whatYouDo &&
                      stack && (
                        <div className="case-4" key={index}>
                          <div className="title-case-4">
                            {name.toUpperCase() + " - " + link}
                          </div>
                          <div className="summary-4">
                            <div className="title-con-4">Summary:</div>
                            {summary}
                          </div>
                          <div className="what-4">
                            <div className="title-con-4">What i did here: </div>
                            {whatYouDo}
                          </div>
                          <div className="">
                            <div className="title-con-4">Stack:</div>
                            {stack.map((item, index) => {
                              return (
                                <span className="span-4" key={index}>
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

              <img className="footer-4" src="./public_images/template4.2.png" alt="footerBackground" />
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
      </div>
      {!open2 ? null : (
        <div className="side-close2" onClick={() => setOpen2(!open2)}></div>
      )}
    </div>
  );
};

export default Template4;
