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




const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        " linear-gradient(to top right, rgb(161, 255, 99), rgb(131, 226, 93), rgb(101, 198, 87), rgb(70, 169, 80), rgb(40, 141, 74), rgb(10, 112, 68), rgb(14, 129, 91), rgb(18, 147, 114), rgb(23, 164, 138), rgb(27, 181, 161), rgb(31, 199, 184), rgb(35, 216, 207))",
        
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        " linear-gradient(to top right, rgb(161, 255, 99), rgb(131, 226, 93), rgb(101, 198, 87), rgb(70, 169, 80), rgb(40, 141, 74), rgb(10, 112, 68), rgb(14, 129, 91), rgb(18, 147, 114), rgb(23, 164, 138), rgb(27, 181, 161), rgb(31, 199, 184), rgb(35, 216, 207))",
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
    backgroundImage:
      "  linear-gradient(to top right, rgb(99, 255, 169), rgb(81, 226, 149), rgb(63, 198, 129), rgb(46, 169, 108), rgb(28, 141, 88), rgb(10, 112, 68), rgb(14, 129, 91), rgb(18, 147, 114), rgb(23, 164, 138), rgb(27, 181, 161), rgb(31, 199, 184), rgb(35, 216, 207))",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "  linear-gradient(to top right, rgb(99, 255, 169), rgb(81, 226, 149), rgb(63, 198, 129), rgb(46, 169, 108), rgb(28, 141, 88), rgb(10, 112, 68), rgb(14, 129, 91), rgb(18, 147, 114), rgb(23, 164, 138), rgb(27, 181, 161), rgb(31, 199, 184), rgb(35, 216, 207))",
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
      return "This is the bit I really care about!";
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
           
              
              <Redirect to="/portfolio" className={classes.instructions} />
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div className="container">
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
