import React, { useState, useEffect } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import "./Template6.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AboutHardSkills from "../../inputs/AboutHardSkills";
import AboutWorkHistory from "../../inputs/AboutWorkHistory";
import Portfolio from "../../inputs/Portfolio";
import AboutMe from "../../inputs/AboutMe";
import Tooltip from "@material-ui/core/Tooltip";

function Template6 () {
  let pdfExportComponent;
  const userInfo = useSelector((state) => state.aboutMeReducer);
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
  const {
    firstCompany,
    firstPosition,
    firstDescription,
    secondCompany,
    secondPosition,
    secondDescription,
  } = useSelector((state) => state.aboutWorkHistoryReducer);
  const projects = [
    firstProject,
    secondProject,
    thirdProject,
    fourthProject,
    fifthProject,
    sixthProject,
  ];
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
        </div>
        <PDFExport
          forcePageBreak=".page-break"
          ref={(component) => (pdfExportComponent = component)}
          fileName={`${
            userInfo.firstName + userInfo.secondName + userInfo.careerObjective
          }`}
        >
          <div className="template-6">
            <div className="content-info-6">
              <div className="left-info-6">
                <div
                  className="ava-4 rel"
                  style={{
                    backgroundImage: `url(${
                      userInfo.avatar ? userInfo.avatar : "./user.png"
                    })`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: `${userInfo.avatarHorizontal}% ${userInfo.avatarVertical}%`,
                    width: "100%",
                    height: 280,
                    margin: "auto",
                  }}
                >
                  <div className="info-6">
                    <div className="container-info-6">
                      <div className="name-6 bold-6">
                        {userInfo.firstName.toUpperCase() +
                          " " +
                          userInfo.secondName.toUpperCase()}
                      </div>
                      <div className="post-6 bold-6">
                        {userInfo.careerObjective.toUpperCase()}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-info-left-6">
                  <div className="contact-6">
                    <div className="title-6">Contact</div>
                    <div className="line-6"></div>
                    <div>
                      <strong className="bold-6">Email:</strong>{" "}
                      {userInfo.email}
                    </div>
                    {userInfo.vkontakte && (
                      <div>
                        <strong className="bold-6">Vkontakte:</strong>{" "}
                        {userInfo.vkontakte}
                      </div>
                    )}
                    {userInfo.skype && (
                      <div>
                        <strong className="bold-6">Skype:</strong>{" "}
                        {userInfo.skype}
                      </div>
                    )}
                    {userInfo.phoneNumber && (
                      <div>
                        <strong className="bold-6">Tel:</strong>{" "}
                        {userInfo.phoneNumber}
                      </div>
                    )}
                    {userInfo.github && (
                      <div>
                        <strong className="bold-6">GitHub:</strong>{" "}
                        {userInfo.github}
                      </div>
                    )}

                    {userInfo.facebook && (
                      <div>
                        <strong className="bold-6">Facebook:</strong>{" "}
                        {userInfo.facebook}
                      </div>
                    )}
                  </div>

                  <div className="lang-6">
                    <div className="title-6 mt-6 bold-6">Languages</div>
                    <div className="line-6"></div>

                    <div className="content-lang-6">{userInfo.languages}</div>
                  </div>
                  <div className="skills-6">
                    <div className="title-6 mt-6 bold-6">Skills</div>
                    <div className="line-6"></div>
                    <div className="content-skills-6">
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
                  </div>
                </div>
              </div>
              <div className="right-info-6">
                <div className="about-6">
                  <div className="title-6 mt-6 bold-6">ABOUT</div>
                  <div className="line2-6"></div>
                  <div className="content-about-6">{userInfo.aboutMeInfo}</div>
                </div>
                <div className="edu-6">
                  <div className="title-6 mt-6 bold-6">EDUCATION</div>
                  <div className="line2-6"></div>
                  <div className="content-edu-6">{userInfo.education}</div>
                </div>
                <div className="work-6">
                  <div className="title-6 mt-6 bold-6">WORK EXPERIENCE</div>
                  <div className="line2-6"></div>
                  <div className="content-work-6">
                    {((firstCompany && firstPosition && firstDescription) ||
                      (secondCompany &&
                        secondPosition &&
                        secondDescription)) && (
                      <div className="">
                        <div className="">
                          <div className="bold-6">{firstCompany}</div>
                          <div className="bold-6">{firstPosition}</div>
                          <div className="">{firstDescription}</div>
                        </div>
                        <div className="">
                          <div className="bold-6">{secondCompany}</div>
                          <div className="bold-6">{secondPosition}</div>
                          <div className="">{secondDescription}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <br />
            {isHavePortfolio && (
              <div className="second-6 page-break">
                <div className="title-portfolio-6">PORTFOLIO</div>

                <div className="flex-6 ">
                  {projects.map((item, index) => {
                    let { name, link, summary, whatYouDo, stack } = item;
                    return (
                      name &&
                      summary &&
                      whatYouDo &&
                      stack && (
                        <div key={index} className="items-p-6">
                          <div className="pt-6">
                            {name.toUpperCase()}
                            {link && (
                              <div className="pt-6">{link.toUpperCase()}</div>
                            )}
                          </div>
                          <div className="line-6"></div>

                          <div className="">
                            <div className="pt-6">Summary:</div>
                            {summary}
                          </div>
                          <div className="">
                            <div className="pt-6">What i did here</div>
                            {whatYouDo}
                          </div>
                          <div className="">
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

export default Template6;
