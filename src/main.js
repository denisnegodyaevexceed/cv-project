import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AboutMe from "./components/inputs/aboutMe";
import AboutWorkHistory from "./components/inputs/aboutWorkHistory";
import AboutHardSkills from "./components/inputs/aboutHardSkills";
import { Link, Redirect, Route } from "react-router-dom";
import Templates from './templatePage'
import Container from '@material-ui/core/Container';
import Portfolio from "./components/inputs/portfolio";




const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient(to top right, rgb(23, 11, 11), rgb(40, 16, 12), rgb(58, 20, 13), rgb(75, 25, 14), rgb(93, 29, 15), rgb(110, 34, 16), rgb(110, 39, 18), rgb(111, 44, 19), rgb(111, 49, 21), rgb(111, 54, 22), rgb(112, 59, 24), rgb(112, 64, 25));",
        
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient(to top right, rgb(23, 11, 11), rgb(40, 16, 12), rgb(58, 20, 13), rgb(75, 25, 14), rgb(93, 29, 15), rgb(110, 34, 16), rgb(110, 39, 18), rgb(111, 44, 19), rgb(111, 49, 21), rgb(111, 54, 22), rgb(112, 59, 24), rgb(112, 64, 25));",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundColor:
      "#f74d33",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundColor:
      "#f74d33",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["1", "2", "3", "4", "5","6"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AboutMe />;
    case 1:
      return <AboutWorkHistory />;
    case 2:
      return <AboutHardSkills />;
    case 3:
      return <Portfolio/>;
    case 4:
      return "This is the bit I really care about!";
      case 5:
      return <Templates/>;
    default:
      return "Unknown step";
  }
}

export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (

    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
           
              
              <Redirect to="/resume" className={classes.instructions} />
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div className="container-pdf">
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
