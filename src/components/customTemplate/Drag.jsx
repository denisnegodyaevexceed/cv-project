import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { GridStack } from "gridstack";
import { SketchPicker } from "react-color";
import "gridstack/dist/h5/gridstack-dd-native";
import "gridstack/dist/jq/gridstack-dd-jqueryui";
import { PDFExport } from "@progress/kendo-react-pdf";
import {
  ButtonGroup,
  AccordionSummary,
  Button,
  Container,
  Grid,
  IconButton,
  Accordion,
  AccordionDetails,
  MenuItem,
  Select,
  Tooltip,
  makeStyles
} from "@material-ui/core";
import Load from "../loader/Load";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import GetAppIcon from "@material-ui/icons/GetApp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SaveIcon from "@material-ui/icons/Save";
import DragHeader from "./DragHeader";
import DragBody from "./DragBody";
import DragPortfolio from "./DragPortfolio";
import TextDecorateButtons from "./TextDecorateButtons";
import AboutMe from "../inputs/AboutMe";
import Portfolio from "../inputs/Portfolio";
import AboutWorkHistory from "../inputs/AboutWorkHistory";
import AboutHardSkills from "../inputs/AboutHardSkills";
import allCustomizedTemplateActions from "../../actions/customizedTemplateActions";
import allAboutMeActions from "../../actions/aboutMeActions";
import allAboutWorkActions from "../../actions/aboutWorkActions";
import allHardSkillsActions from "../../actions/aboutHardSkillsActions";
import allPortfolioActions from "../../actions/portfolioActions";
import firebase from "firebase";
import allTechnologyActions from "../../actions/addTechnologyActions";
export let GridPortfolio;

const useStyles3 = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

function Drag() {
  const storage = firebase.storage();
  let { uid } = useParams();
  let pdfExportComponent;
  const dispatch = useDispatch();
  const {
    headerBackground,
    bodyBackground,
    headerImageValue,
    headerImage,
    bodyImageValue,
    bodyImage,
    nameSize,
    posSize,
    titleSize,
    subTitleSize,
    textSize,
    smallTextSize,
    nameColor,
    posColor,
    titleColor,
    subTitleColor,
    textColor,
    smallTextColor,
    customizedTemplateUid,
  } = useSelector((state) => state.customizedTemplateReducer);
  const usersStyles = useSelector((state) => state.customizedTemplateReducer);
  const userInfo = useSelector((state) => state.aboutMeReducer);
  const userAboutHardSkills = useSelector(
    (state) => state.aboutHardSkillsReducer
  );
  const addTechArr = useSelector((state) => state.addTechnologyReducer);
  const userWorkHistory = useSelector((state) => state.aboutWorkHistoryReducer);
  const userInfoPortfolio = useSelector((state) => state.portfolioReducer);
  const {
    firstProject,
    secondProject,
    thirdProject,
    fourthProject,
  } = useSelector((state) => state.portfolioReducer);
  const [cls, setCls] = useState(["side1"]);
  const [cls2, setCls2] = useState(["side2"]);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(true);
  const [font, setFont] = useState("Raleway");
  const useStyles2 = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.secondary,
      "& svg": {
        margin: theme.spacing(1),
        padding: 4,
      },
      "& hr": {
        margin: theme.spacing(0, 0.5),
      },
    },
  }));
  const classes = useStyles();
  const classes2 = useStyles2();
  const classes3 = useStyles3();

  const [load, setLoad] = useState(true);
  const [loadSave, setLoadSave] = useState(false);
  const [loadHeader, setLoadHeader] = useState(false);
  const [loadBody, setLoadBody] = useState(false);
  const [loadAvatar, setLoadAvatar] = useState(false);

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

  useEffect(() => {
    let options = {
      cellHeight: 5,
      disableOneColumnMode: true,
      float: false,
    };
    if (uid) {
      dispatch(allCustomizedTemplateActions.setCustomTemplateUidAction(uid));
      let fetchData = new Promise((resolve, reject) => {
        firebase
          .database()
          .ref(`templates/${uid}`)
          .on("value", (snapshot) => {
            const data = snapshot.val();
            dispatch(allAboutMeActions.setAllAction(data.info));
            dispatch(
              allCustomizedTemplateActions.setAllAction(data.stylesMain)
            );
            dispatch(
              allCustomizedTemplateActions.setMatrixAction(data.matrixBlock)
            );
            dispatch(
              allAboutWorkActions.setAllHistoryAction(data.userWorkHistory)
            );
            dispatch(
              allHardSkillsActions.setAllSkillsAction(data.userAboutHardSkills)
            );
            dispatch(allPortfolioActions.setAllPortfolioAction(data.portfolio));
            setFont(data.font);
            data.newTech &&
              dispatch(allTechnologyActions.setSavedTech(data.newTech));
            data.headerBG &&
              dispatch(
                allCustomizedTemplateActions.setHeaderImageAction(
                  data.headerBG,
                  ""
                )
              );
            data.bodyBG &&
              dispatch(
                allCustomizedTemplateActions.setBodyImageAction(data.bodyBG, "")
              );
            data.fileAvatar &&
              dispatch(allAboutMeActions.setAvatarAction(data.fileAvatar, ""));
            let blocksArr = document.querySelectorAll(
              ".grid-stack-item-content"
            );
            blocksArr.forEach((item, i) => {
              data.stylesBlock.map((itemArr) => {
                if (itemArr.id === item.getAttribute("data-id")) {
                  item.style.alignItems = itemArr.ver;
                  item.style.textAlign = itemArr.hor;
                }
                return null;
              });
            });
            resolve("ok");
          });
      });
      fetchData.then((_) => {
        GridStack.init(options, ".grid-stack-header");
        GridStack.init(options, ".grid-stack-body");
        GridPortfolio = GridStack.init(options, ".grid-stack-page2");
        setLoad(false);
      });
    } else {
      GridStack.init(options, ".grid-stack-header");
      GridStack.init(options, ".grid-stack-body");
      GridPortfolio = GridStack.init(options, ".grid-stack-page2");
      setLoad(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uid]);

  // SAVE
  const handlerSaveTemplate = () => {
    let stylesBlock = [];
    let blocksArr = document.querySelectorAll(".grid-stack-item-content");
    setLoadSave(true);
    blocksArr.forEach((item, i) => {
      stylesBlock.push({
        id: item.getAttribute("data-id"),
        ver: getComputedStyle(item).alignItems,
        hor: getComputedStyle(item).textAlign,
      });
    });

    let matrixBlock = [];
    let blocksArrMatrix = document.querySelectorAll(".grid-stack-item");
    blocksArrMatrix.forEach((item, i) => {
      matrixBlock.push({
        id: item.getAttribute("data-id-matrix"),
        h: item.getAttribute("gs-h"),
        w: item.getAttribute("gs-w"),
        x: item.getAttribute("gs-x"),
        y: item.getAttribute("gs-y"),
      });
    });

    const save = (callback = console.log) => {
      if (customizedTemplateUid) {
        let newTemplate = firebase
          .database()
          .ref(`templates/${customizedTemplateUid}/`);
        newTemplate.update({
          info: {
            firstName: userInfo.firstName,
            secondName: userInfo.secondName,
            careerObjective: userInfo.careerObjective,
            aboutMeInfo: userInfo.aboutMeInfo,
            email: userInfo.email,
            vkontakte: userInfo.vkontakte,
            skype: userInfo.skype,
            phoneNumber: userInfo.phoneNumber,
            github: userInfo.github,
            facebook: userInfo.facebook,
            education: userInfo.education,
            avatar: userInfo.avatar,
            languages: userInfo.languages,
          },
          portfolio: userInfoPortfolio,
          stylesBlock: stylesBlock,
          userWorkHistory,
          userAboutHardSkills,
          font: font,
          newTech: addTechArr.techList,
          matrixBlock: matrixBlock,
          headerBG: headerImage === "" ? null : headerImage,
          bodyBG: bodyImage === "" ? null : bodyImage,
          fileAvatar: userInfo?.fileAvatar || null,
          stylesMain: {
            textAlign: usersStyles?.textAlign || null,
            posVertical: usersStyles?.posVertical || null,
            bodyImagePosition: usersStyles.bodyImagePosition,
            activeBlock: usersStyles.activeBlock,
            headerBackground: usersStyles.headerBackground,
            avaBorderRadius: usersStyles.avaBorderRadius,
            headerImagePosition: usersStyles.headerImagePosition,
            bodyBackground: usersStyles.bodyBackground,
            nameSize: usersStyles.nameSize,
            posSize: usersStyles.posSize,
            titleSize: usersStyles.titleSize,
            subTitleSize: usersStyles.subTitleSize,
            textSize: usersStyles.textSize,
            smallTextSize: usersStyles.smallTextSize,
            nameColor: usersStyles.nameColor,
            posColor: usersStyles.posColor,
            titleColor: usersStyles.titleColor,
            subTitleColor: usersStyles.subTitleColor,
            textColor: usersStyles.textColor,
            smallTextColor: usersStyles.smallTextColor,
            customizedTemplateUid: usersStyles.customizedTemplateUid,
          },
        });
        callback();
      } else {
        let newTemplate = firebase.database().ref("templates/");
        newTemplate
          .push({
            stylesMain: {
              bodyImagePosition: usersStyles.bodyImagePosition,
              activeBlock: usersStyles.activeBlock,
              headerBackground: usersStyles.headerBackground,
              avaBorderRadius: usersStyles.avaBorderRadius,
              headerImagePosition: usersStyles.headerImagePosition,
              bodyBackground: usersStyles.bodyBackground,
              nameSize: usersStyles.nameSize,
              posSize: usersStyles.posSize,
              titleSize: usersStyles.titleSize,
              subTitleSize: usersStyles.subTitleSize,
              textSize: usersStyles.textSize,
              smallTextSize: usersStyles.smallTextSize,
              nameColor: usersStyles.nameColor,
              posColor: usersStyles.posColor,
              titleColor: usersStyles.titleColor,
              subTitleColor: usersStyles.subTitleColor,
              textColor: usersStyles.textColor,
              smallTextColor: usersStyles.smallTextColor,
              customizedTemplateUid: usersStyles.customizedTemplateUid,
              textAlign: usersStyles?.textAlign || null,
              posVertical: usersStyles?.posVertical || null,
            },
            fileAvatar: userInfo?.fileAvatar || null,
            info: {
              firstName: userInfo.firstName,
              secondName: userInfo.secondName,
              careerObjective: userInfo.careerObjective,
              aboutMeInfo: userInfo.aboutMeInfo,
              email: userInfo.email,
              vkontakte: userInfo.vkontakte,
              skype: userInfo.skype,
              phoneNumber: userInfo.phoneNumber,
              github: userInfo.github,
              facebook: userInfo.facebook,
              education: userInfo.education,
              avatar: userInfo.avatar,
              languages: userInfo.languages,
            },
            newTech: addTechArr.techList,
            portfolio: userInfoPortfolio,
            stylesBlock: stylesBlock,
            userWorkHistory,
            userAboutHardSkills,
            font: font,
            matrixBlock: matrixBlock,
            headerBG: headerImage === "" ? null : headerImage,
            bodyBG: bodyImage === "" ? null : bodyImage,
          })
          .then((snap) => {
            dispatch(
              allCustomizedTemplateActions.setCustomTemplateUidAction(snap.key)
            );
            callback(snap.key);
          });
      }
    };
    save((uid) => {
      if (fileHeader?.name) {
        setLoadHeader(true);
        handleUploadHeader((urlHeader) => {
          let newTemplate = firebase
            .database()
            .ref(`templates/${uid || customizedTemplateUid}/`);
          newTemplate
            .update({
              headerBG: urlHeader,
            })
            .then(setLoadHeader(false));
        });
      }

      if (fileBody?.name) {
        setLoadBody(true);
        handleUploadBody((urlBody) => {
          let newTemplate = firebase
            .database()
            .ref(`templates/${uid || customizedTemplateUid}/`);
          newTemplate
            .update({
              bodyBG: urlBody,
            })
            .then(setLoadBody(false));
        });
      }

      if (userInfo?.fileAvatar?.name) {
        setLoadAvatar(true);
        handleUploadAvatar((urlAvatar) => {
          let newTemplate = firebase
            .database()
            .ref(`templates/${uid || customizedTemplateUid}/`);
          newTemplate
            .update({
              fileAvatar: urlAvatar,
            })
            .then(setLoadAvatar(false));
        });
      }

      if (!loadHeader && !loadBody && !loadAvatar) {
        setTimeout(() => {
          setLoadSave(false);
        }, 1000);
      }
    });
  };

  useEffect(() => {
    if (!loadHeader && !loadBody && !loadAvatar) {
      setTimeout(() => {
        setLoadSave(false);
      }, 200);
    }
  }, [loadAvatar, loadBody, loadHeader]);

  const [fileHeader, setFileHeader] = useState(null);
  const [fileBody, setFileBody] = useState(null);
  const handleUploadHeader = (callback = console.log) => {
    const uploadTask = storage
      .ref(`/images/${fileHeader.name}`)
      .put(fileHeader);
    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
        .ref("images")
        .child(fileHeader.name)
        .getDownloadURL()
        .then((urlHeader) => {
          setFileHeader(null);
          callback(urlHeader);
        });
    });
  };

  const handleUploadBody = (callback = console.log) => {
    const uploadTask = storage.ref(`/images/${fileBody.name}`).put(fileBody);
    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
        .ref("images")
        .child(fileBody.name)
        .getDownloadURL()
        .then((urlBody) => {
          setFileBody(null);
          callback(urlBody);
        });
    });
  };

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

  //SAVE
  useEffect(() => {
    if (open2) {
      setCls2((oldArr) => [...oldArr, "open2"]);
    } else {
      setCls2(["side2"]);
    }
  }, [open2]);

  useEffect(() => {
    if (open) {
      setCls((oldArr) => [...oldArr, "open1"]);
    } else {
      setCls(["side1"]);
    }
  }, [open]);

  useEffect(() => {
    open && setOpen2(false);
  }, [open]);

  useEffect(() => {
    open2 && setOpen(false);
  }, [open2]);

  const handleChangeHeaderBackgroungComplete = (color) => {
    dispatch(allCustomizedTemplateActions.setHeaderBackgroundAction(color.hex));
    setFileHeader(null);
  };

  const handleChangeBodyBackgroungComplete = (color) => {
    dispatch(allCustomizedTemplateActions.setBodyBackgroundAction(color.hex));
    setFileBody(null);
  };

  const addHeaderBackground = (e) => {
    setFileHeader(e.target.files[0]);
    return (
      e.target.files[0] &&
      dispatch(
        allCustomizedTemplateActions.setHeaderImageAction(
          URL.createObjectURL(e.target.files[0]),
          e.target.value
        )
      )
    );
  };

  const addBodyBackground = (e) => {
    setFileBody(e.target.files[0]);
    return (
      e.target.files[0] &&
      dispatch(
        allCustomizedTemplateActions.setBodyImageAction(
          URL.createObjectURL(e.target.files[0]),
          e.target.value
        )
      )
    );
  };

  const pdfExport = () => {
    pdfExportComponent.save();
  };

  const handleChangeFont = (e) => {
    setFont(e.target.value);
  };

  let styleName = {
    fontSize: nameSize + "px",
    color: nameColor,
    fontFamily: font + "-Bold",
  };

  let stylePosition = {
    fontSize: posSize + "px",
    color: posColor,
    fontFamily: font + "-Bold",
  };

  let styleTitle = {
    fontSize: titleSize + "px",
    color: titleColor,
    fontFamily: font + "-Bold",
  };

  let styleSubTitle = {
    fontSize: subTitleSize + "px",
    color: subTitleColor,
    fontFamily: font + "-Bold",
  };

  let styleText = {
    fontSize: textSize + "px",
    color: textColor,
    fontFamily: font + "-Light",
  };

  let styleSmallText = {
    fontSize: smallTextSize + "px",
    color: smallTextColor,
    fontFamily: font + "-Light",
  };

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 300,
        width: 250,
      },
    },
  };

  const fontList = [
    "Raleway",
    "Caviar",
    "Walkway",
    "JetBrains",
    "Dancing",
    "Vonique",
    "Monterey",
    "Titillium",
    "Monoglyceride",
    "Flamenco",
    "Cinzel",
    "Optimus",
    "Neou",
    "NK57",
    "SEGMENT16C",
    "BPMono",
    "SpaceMono",
    "SicretMono",
    "Yoshitoshi",
    "PiecesOfEight",
    "Vogue",
    "HalfElven",
    "Gatsby",
    "LifeSavers",
    "Lato",
    "OpenSans",
    "ChampagneLimousines",
    "Ubuntu",
    "Cabin",
    "Hind",
    "Kanit",
    "Capoon",
    "Abenda",
    "KenyanCoffee",
    "LJDesignStudiosIs",
    "Karla",
    "Sharpe",
    "ForgottenFuturist",
    "UbicadaPro",
    "Aniron",
    "Playfair",
    "Alexandria",
    "Rufina",
    "Lusitana",
    "AlegreyaSC",
    "Delia",
    "Domine",
    "Vollkorn",
  ];

  return (
    <>
      {load === true ? <Load text={"Loading..."} /> : null}
      {loadSave === true ? <Load text={"Saving..."} /> : null}
      <Container>
        <Grid container>
          <Grid item xs={12}></Grid>
          <Grid
            item
            xs={12}
            className={`${open ? "contentOpen2" : ""} ${
              open2 ? "contentOpen1" : ""
            } transitionBlock`}
          >
            <div className="button">
              <div className="cont-btn">
                <Button
                  variant="contained"
                  color="secondary"
                  className="k-button"
                  to="/templates"
                  component={Link}
                >
                  Change Template
                </Button>
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
                  <GetAppIcon
                    color="inherit"
                    className="k-button"
                    onClick={() =>
                      userInfo.firstName &&
                      userInfo.secondName &&
                      userInfo.careerObjective &&
                      userInfo.email &&
                      userInfo.emailValid &&
                      pdfExport()
                    }
                  />
                </Tooltip>
                <Tooltip title="Save template">
                  <SaveIcon
                    color="inherit"
                    className="k-button"
                    onClick={() => {
                      handlerSaveTemplate();
                    }}
                  >
                    save{customizedTemplateUid}
                  </SaveIcon>
                </Tooltip>
              </div>
            </div>
            <PDFExport
              forcePageBreak=".page-break"
              ref={(component) => (pdfExportComponent = component)}
              fileName={
                `${userInfo.firstName + userInfo.secondName}` +
                `${userInfo.careerObjective}`
              }
            >
              <DragHeader styleName={styleName} stylePosition={stylePosition} />
              <DragBody
                styleSmallText={styleSmallText}
                styleText={styleText}
                styleTitle={styleTitle}
                styleSubTitle={styleSubTitle}
              />
              <br />
              <DragPortfolio
                isHavePortfolio={isHavePortfolio}
                styleSmallText={styleSmallText}
                styleText={styleText}
                styleTitle={styleTitle}
                styleSubTitle={styleSubTitle}
              />
            </PDFExport>
          </Grid>
        </Grid>
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
        {!open ? (
          <div onClick={() => setOpen(!open)} className="arrow2"></div>
        ) : null}
        <div className={cls.join(" ")}>
          <h2>Editing</h2>
          <div className="edit-cont">
            <div>
              <br />
              <br />
              <Grid container alignItems="center" className={classes.root}>
                <h3
                  style={{ width: "100%", textAlign: "center", margin: "10px" }}
                >
                  Select font
                </h3>
                <Select
                  className="select-font"
                  value={font}
                  onChange={(e) => handleChangeFont(e)}
                  id="filled-select-currency"
                  variant="outlined"
                  MenuProps={MenuProps}
                >
                  {fontList.map((item, index) => {
                    return (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    );
                  })}
                </Select>
              </Grid>
              <br />

              <br />

              <br />
              <TextDecorateButtons />
              <br />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className={classes2.heading}>
                    <h3
                      style={{
                        width: "100%",
                        textAlign: "center",
                        margin: "10px",
                      }}
                    >
                      Background
                    </h3>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex-cont-edit">
                    <div className="cont-edit">
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <div className={classes2.heading}>
                            <h3
                              style={{
                                width: "100%",
                                textAlign: "center",
                                margin: "10px",
                              }}
                            >
                              Background header
                            </h3>
                          </div>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div>
                            <form>
                              <input
                                accept="image/*"
                                value={headerImageValue}
                                className={classes3.input}
                                id="icon-button-file"
                                type="file"
                                onChange={(e) => addHeaderBackground(e)}
                              />
                              <label htmlFor="icon-button-file">
                                <IconButton
                                  aria-label="upload picture"
                                  component="span"
                                >
                                  <PhotoCamera className="photoInput" />
                                </IconButton>
                              </label>
                              <ButtonGroup
                                size="small"
                                color="primary"
                                aria-label="outlined primary button group"
                              >
                                <Button
                                  onClick={(e) =>
                                    dispatch(
                                      allCustomizedTemplateActions.setHeaderImagePositionAction(
                                        "cover"
                                      )
                                    )
                                  }
                                >
                                  Cover
                                </Button>
                                <Button
                                  onClick={(e) =>
                                    dispatch(
                                      allCustomizedTemplateActions.setHeaderImagePositionAction(
                                        "repeat"
                                      )
                                    )
                                  }
                                >
                                  Repeat
                                </Button>
                              </ButtonGroup>
                            </form>
                            <SketchPicker
                              color={headerBackground}
                              onChangeComplete={
                                handleChangeHeaderBackgroungComplete
                              }
                            />
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                    <div className="cont-edit">
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <div className={classes2.heading}>
                            <h3
                              style={{
                                width: "100%",
                                textAlign: "center",
                                margin: "10px",
                              }}
                            >
                              Background main
                            </h3>
                          </div>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div>
                            <form>
                              <input
                                accept="image/*"
                                value={bodyImageValue}
                                className={classes3.input}
                                id="icon-button-file2"
                                type="file"
                                onChange={(e) => addBodyBackground(e)}
                              />
                              <label htmlFor="icon-button-file2">
                                <IconButton
                                  aria-label="upload picture"
                                  component="span"
                                >
                                  <PhotoCamera className="photoInput" />
                                </IconButton>
                              </label>
                              <ButtonGroup
                                size="small"
                                color="primary"
                                aria-label="outlined primary button group"
                              >
                                <Button
                                  onClick={(e) =>
                                    dispatch(
                                      allCustomizedTemplateActions.setBodyImagePositionAction(
                                        "cover"
                                      )
                                    )
                                  }
                                >
                                  Cover
                                </Button>
                                <Button
                                  onClick={(e) =>
                                    dispatch(
                                      allCustomizedTemplateActions.setBodyImagePositionAction(
                                        "repeat"
                                      )
                                    )
                                  }
                                >
                                  Repeat
                                </Button>
                              </ButtonGroup>
                            </form>
                            <SketchPicker
                              color={bodyBackground}
                              onChangeComplete={
                                handleChangeBodyBackgroungComplete
                              }
                            />
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </Container>
      {!open ? null : (
        <div className="side-close1" onClick={() => setOpen(!open)}></div>
      )}
      {!open2 ? null : (
        <div className="side-close2" onClick={() => setOpen2(!open2)}></div>
      )}
    </>
  );
}
export default Drag;
