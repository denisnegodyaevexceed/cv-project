import React from "react";
import TextField from "@material-ui/core/TextField";
import allAboutWorkActions from "../../actions/aboutWorkActions";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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

const AboutWorkHistory = () => {
  const dispatch = useDispatch();

  let {
    firstCompany,
    firstPosition,
    firstDescription,
    secondCompany,
    secondPosition,
    secondDescription,
  } = useSelector((state) => state.aboutWorkHistoryReducer);


  let firstDescriptionCounter = (180 - firstDescription.length) + ' letters left.'
  let secondDescriptionCounter = (180 - secondDescription.length) + ' letters left.'
  
  
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
                  id="outlined-multiline-flexible"
                  label="Tell us more"
                  multiline
                  rowsMax={10}
                  helperText={firstDescription.length>0? firstDescriptionCounter: ''}
                  value={firstDescription}
                  onChange={(e) =>
                    dispatch(
                      allAboutWorkActions.setFirstCompanyDescription(
                        e.target.value.length <= 180 ? e.target.value : firstDescription
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
                  id="outlined-multiline-flexible"
                  label="Tell us more"
                  multiline
                  rowsMax={10}
                  helperText={secondDescription.length>0? secondDescriptionCounter: ''}
                  value={secondDescription}
                  onChange={(e) =>
                    dispatch(
                      allAboutWorkActions.setSecondCompanyDescription(
                        e.target.value.length <= 180 ? e.target.value : secondDescription
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
};

export default AboutWorkHistory;

