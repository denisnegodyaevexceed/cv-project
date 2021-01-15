import React, { useEffect } from "react";
import {
  makeStyles,
  Accordion,
  TextField,
  AccordionSummary,
  AccordionDetails,
  IconButton,
} from "@material-ui/core/";
import { useDispatch, useSelector } from "react-redux";
import allAboutMeActions from "../../actions/aboutMeActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import lettersCounter from "../../utilites/lettersCounter";
import emailValidControll from "../../utilites/emailValidControll";




const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const useStyles2 = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
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

function AboutMe() {
  const dispatch = useDispatch();
  let {
    firstName,
    avatar,
    secondName,
    careerObjective,
    aboutMeInfo,
    email,
    emailValid,
    vkontakte,
    skype,
    phoneNumber,
    github,
    facebook,
    education,
    languages,
    avatarHorizontal,
    avatarVertical,
  } = useSelector((state) => state.aboutMeReducer);

  const moveHorizontal = (num) => {
    if (avatarHorizontal + +num >= 15 && avatarHorizontal + +num <= 85) {
      dispatch(allAboutMeActions.setAvatarHorizontal(avatarHorizontal + +num));
    }
  };

  const moveVertical = (num) => {
    if (avatarVertical + +num >= 15 && avatarVertical + +num <= 85) {
      dispatch(allAboutMeActions.setAvatarVertical(avatarVertical + +num));
    }
  };

  const userInfo = useSelector((state) => state.aboutMeReducer);

  let validEmail = emailValidControll(email);

  useEffect(() => {
    dispatch(allAboutMeActions.setEmailValid(validEmail));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validEmail]);

  const classes = useStyles();
  const classes2 = useStyles2();
  const classes3 = useStyles3();

  return (
    <div className="container-pdf">
      <div className={classes2.root}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className={classes2.heading}>
              <h2>Tell about yourself.</h2>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  required
                  value={firstName}
                  onChange={(e) => {
                    dispatch(
                      allAboutMeActions.setFirstNameAction(
                        e.target.value.length <= 12 ? e.target.value : firstName
                      )
                    );
                  }}
                  id="firstName"
                  label="First name"
                  variant="outlined"
                />
                <TextField
                  required
                  value={secondName}
                  onChange={(e) => {
                    dispatch(
                      allAboutMeActions.setSecondNameAction(
                        e.target.value.length <= 12
                          ? e.target.value
                          : secondName
                      )
                    );
                  }}
                  id="secondName"
                  label="Second name"
                  variant="outlined"
                />
                <TextField
                  required
                  value={careerObjective}
                  onChange={(e) => {
                    dispatch(
                      allAboutMeActions.setCareerObjectiveAction(e.target.value)
                    );
                  }}
                  id="position"
                  label="Your position"
                  variant="outlined"
                />

                <TextField
                  label="About your education"
                  multiline
                  type="text"
                  helperText={education.length > 0 ? lettersCounter(education, 180) : ""}
                  rowsMax={10}
                  value={education}
                  onChange={(e) => {
                    dispatch(
                      allAboutMeActions.setEducationAction(
                        e.target.value.length <= 180
                          ? e.target.value
                          : education
                      )
                    );
                  }}
                  variant="outlined"
                />
                <TextField
                  label="Languages"
                  multiline
                  type="text"
                  helperText={languages.length > 0 ? lettersCounter(languages, 180) : ""}
                  rowsMax={10}
                  value={languages}
                  onChange={(e) => {
                    dispatch(
                      allAboutMeActions.setLanguagesAction(
                        e.target.value.length <= 180
                          ? e.target.value
                          : languages
                      )
                    );
                  }}
                  variant="outlined"
                />

                <TextField
                  label="Something about you"
                  helperText={aboutMeInfo.length > 0 ? lettersCounter(aboutMeInfo, 180) : ""}
                  multiline
                  rowsMax={10}
                  value={aboutMeInfo}
                  onChange={(e) => {
                    dispatch(
                      allAboutMeActions.setAboutMeInfoAction(
                        e.target.value.length <= 180
                          ? e.target.value
                          : aboutMeInfo
                      )
                    );
                  }}
                  variant="outlined"
                />
                <input
                  accept="image/*"
                  onChange={(e) =>
                    dispatch(
                      allAboutMeActions.setAvatarAction(
                        URL.createObjectURL(e.target.files[0]),
                        e.target.files[0]
                      )
                    )
                  }
                  className={classes3.input}
                  id="icon-button-file3"
                  type="file"
                />
                <label htmlFor="icon-button-file3">
                  <IconButton aria-label="upload picture" component="span">
                    <PhotoCamera className="photoInput" />
                  </IconButton>
                </label>
                {userInfo.avatar && (
                  <div className="ava-pos">
                    <KeyboardArrowLeftIcon
                      variant="contained"
                      color="secondary"
                      size="large"
                      className="pos-ava-1"
                      onClick={(e) => moveHorizontal(5)}
                    >
                      Left
                    </KeyboardArrowLeftIcon>
                    <KeyboardArrowRightIcon
                      size="large"
                      variant="contained"
                      color="secondary"
                      className="pos-ava-2"
                      onClick={(e) => moveHorizontal(-5)}
                    >
                      Right
                    </KeyboardArrowRightIcon>
                    <KeyboardArrowUpIcon
                      size="large"
                      variant="contained"
                      color="secondary"
                      className="pos-ava-3"
                      onClick={(e) => moveVertical(5)}
                    >
                      Top
                    </KeyboardArrowUpIcon>
                    <KeyboardArrowDownIcon
                      size="large"
                      variant="contained"
                      color="secondary"
                      className="pos-ava-4"
                      onClick={(e) => moveVertical(-5)}
                    >
                      Down
                    </KeyboardArrowDownIcon>
                  </div>
                )}
              </form>
              {avatar && (
                <img src={avatar} className="inputAvatar" alt="avatar" />
              )}
              <div>* - requared fields</div>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <div className={classes2.heading}>
              <h2>Please add your contacts.</h2>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  value={email}
                  error={!emailValid}
                  helperText={emailValid ? "" : "Invalid email"}
                  onChange={(e) => {
                    dispatch(allAboutMeActions.setEmailAction(e.target.value));
                  }}
                  required
                  type="email"
                  label="Email"
                  variant="outlined"
                />
                <TextField
                  value={vkontakte}
                  onChange={(e) => {
                    dispatch(
                      allAboutMeActions.setVkontakteAction(e.target.value)
                    );
                  }}
                  label="Vkontakte"
                  variant="outlined"
                />
                <TextField
                  value={skype}
                  onChange={(e) => {
                    dispatch(allAboutMeActions.setSkypeAction(e.target.value));
                  }}
                  label="Skype"
                  variant="outlined"
                />
                <TextField
                  value={phoneNumber}
                  onChange={(e) => {
                    dispatch(
                      allAboutMeActions.setPhoneNumberAction(e.target.value)
                    );
                  }}
                  label="Phone number"
                  variant="outlined"
                />
                <TextField
                  value={github}
                  onChange={(e) => {
                    dispatch(allAboutMeActions.setGithubAction(e.target.value));
                  }}
                  label="Github"
                  variant="outlined"
                />
                <TextField
                  value={facebook}
                  onChange={(e) => {
                    dispatch(
                      allAboutMeActions.setFacebookAction(e.target.value)
                    );
                  }}
                  label="Facebook"
                  variant="outlined"
                />
              </form>
              <div>* - requared fields</div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default AboutMe;
