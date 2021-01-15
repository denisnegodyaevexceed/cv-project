import React from "react";
import allAboutWorkActions from "../../actions/aboutWorkActions";
import { useDispatch, useSelector } from "react-redux";
import {
  makeStyles,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core/";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import lettersCounter from "../../utilites/lettersCounter";


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

function AboutWorkHistory() {
  const dispatch = useDispatch();

  let {
    firstCompany,
    firstPosition,
    firstDescription,
    secondCompany,
    secondPosition,
    secondDescription,
  } = useSelector((state) => state.aboutWorkHistoryReducer);

  const classes = useStyles();
  const classes2 = useStyles2();

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
              <h2>Indicate the last two places of work.</h2>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  value={firstCompany}
                  onChange={(e) =>
                    dispatch(
                      allAboutWorkActions.setFirstCompanyName(e.target.value)
                    )
                  }
                  label="Company"
                  variant="outlined"
                />
                <TextField
                  value={firstPosition}
                  onChange={(e) =>
                    dispatch(
                      allAboutWorkActions.setFirstCompanyPosition(
                        e.target.value
                      )
                    )
                  }
                  label="Position"
                  variant="outlined"
                />
                <TextField
                  label="Tell us more"
                  multiline
                  rowsMax={10}
                  helperText={
                    firstDescription.length > 0 ? lettersCounter(firstDescription, 180) : ""
                  }
                  value={firstDescription}
                  onChange={(e) =>
                    dispatch(
                      allAboutWorkActions.setFirstCompanyDescription(
                        e.target.value.length <= 180
                          ? e.target.value
                          : firstDescription
                      )
                    )
                  }
                  variant="outlined"
                />
              </form>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  value={secondCompany}
                  onChange={(e) =>
                    dispatch(
                      allAboutWorkActions.setSecondCompanyName(e.target.value)
                    )
                  }
                  label="Company"
                  variant="outlined"
                />
                <TextField
                  value={secondPosition}
                  onChange={(e) =>
                    dispatch(
                      allAboutWorkActions.setSecondCompanyPosition(
                        e.target.value
                      )
                    )
                  }
                  label="Position"
                  variant="outlined"
                />
                <TextField
                  label="Tell us more"
                  multiline
                  rowsMax={10}
                  helperText={
                    secondDescription.length > 0 ? lettersCounter(secondDescription, 180) : ""
                  }
                  value={secondDescription}
                  onChange={(e) =>
                    dispatch(
                      allAboutWorkActions.setSecondCompanyDescription(
                        e.target.value.length <= 180
                          ? e.target.value
                          : secondDescription
                      )
                    )
                  }
                  variant="outlined"
                />
              </form>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default AboutWorkHistory;
