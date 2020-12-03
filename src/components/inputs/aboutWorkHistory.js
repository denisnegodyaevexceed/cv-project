import React from "react";
import TextField from "@material-ui/core/TextField";
import allAboutWorkActions from "../../actions/aboutWorkActions";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
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
            <Typography className={classes2.heading}>
              <h2>Indicate the last two places of work.</h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
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
                  value={firstDescription}
                  onChange={(e) =>
                    dispatch(
                      allAboutWorkActions.setFirstCompanyDescription(
                        e.target.value
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
                  value={secondDescription}
                  onChange={(e) =>
                    dispatch(
                      allAboutWorkActions.setSecondCompanyDescription(
                        e.target.value
                      )
                    )
                  }
                  variant="outlined"
                />
              </form>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default AboutWorkHistory;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Accordion from '@material-ui/core/Accordion';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
// import AccordionDetails from '@material-ui/core/AccordionDetails';
// import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular,
//   },
// }));

// export default function SimpleAccordion() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
//           <Typography className={classes.heading}>Accordion 1</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//             sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2a-content"
//           id="panel2a-header"
//         >
//           <Typography className={classes.heading}>Accordion 2</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//             sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// }
