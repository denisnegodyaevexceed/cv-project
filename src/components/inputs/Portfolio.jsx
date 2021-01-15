import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  makeStyles,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core/";
import allPortfolioActions from "../../actions/portfolioActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Autocomplete from "@material-ui/lab/Autocomplete";
import top100Films from "../../constants/stack";
import lettersCounter from "../../utilites/lettersCounter";
import showProject from "../../utilites/showProject";




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

function Portfolio() {
  const dispatch = useDispatch();
  const {
    firstProject,
    secondProject,
    thirdProject,
    fourthProject,
    fifthProject,
    sixthProject,
  } = useSelector((state) => state.portfolioReducer);
  const classes = useStyles();
  const classes2 = useStyles2();
  const { techList } = useSelector((state) => state.addTechnologyReducer);
  let uniqueArray = top100Films.concat(techList).concat();


  return (
    <div className="container">
      <div className={classes2.root}>
        <h2 className="t-1">Tell about your best projects.</h2>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div>
              <h3>First project.</h3>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div className={classes.root} noValidate autoComplete="off">
                <TextField
                  value={firstProject.name}
                  onChange={(e) =>
                    dispatch(
                      allPortfolioActions.setFirstProjectName(e.target.value)
                    )
                  }
                  label="Project name"
                  variant="outlined"
                />
                <TextField
                  value={firstProject.link}
                  onChange={(e) =>
                    dispatch(
                      allPortfolioActions.setFirstProjectLink(e.target.value)
                    )
                  }
                  label="Link to this project"
                  variant="outlined"
                />
                <TextField
                  value={firstProject.summary}
                  onChange={(e) =>
                    dispatch(
                      allPortfolioActions.setFirstProjectSummary(
                        e.target.value.length <= 220
                          ? e.target.value
                          : firstProject.summary
                      )
                    )
                  }
                  helperText={
                    firstProject?.summary?.length > 0 ? lettersCounter(firstProject.summary, 220) : ""
                  }
                  label="Summary"
                  variant="outlined"
                  multiline
                  rowsMax={10}
                />
                <TextField
                  value={firstProject.whatYouDo}
                  onChange={(e) =>
                    dispatch(
                      allPortfolioActions.setFirstProjectWhatYouDo(
                        e.target.value.length <= 180
                          ? e.target.value
                          : firstProject.whatYouDo
                      )
                    )
                  }
                  helperText={
                    firstProject?.whatYouDo?.length > 0
                      ? lettersCounter(firstProject.whatYouDo, 180)
                      : ""
                  }
                  label="What you did here?"
                  variant="outlined"
                  multiline
                  rowsMax={10}
                />
              </div>
              <h3>Stack:</h3>
              <div className={classes.root} noValidate autoComplete="off">
                <div style={{ width: "100%" }}>
                  <Autocomplete
                    getOptionSelected={(option, value) =>
                      option.title === value.title
                    }
                    multiple
                    options={uniqueArray}
                    getOptionLabel={(option) => option.title}
                    onChange={(_, values) =>
                      dispatch(allPortfolioActions.setFirstProjectStack(values))
                    }
                    value={firstProject.stack}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        placeholder="Search"
                        margin="normal"
                      />
                    )}
                  />
                </div>
              </div>
              <h4>All fields are required.</h4>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion hidden={showProject(firstProject, secondProject)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <div className={classes2.heading}>
              <h3>Second project</h3>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div className={classes.root} noValidate autoComplete="off">
                <TextField
                  value={secondProject.name}
                  onChange={(e) =>
                    dispatch(
                      allPortfolioActions.setSecondProjectName(e.target.value)
                    )
                  }
                  label="Project name"
                  variant="outlined"
                />
                <TextField
                  value={secondProject.link}
                  onChange={(e) =>
                    dispatch(
                      allPortfolioActions.setSecondProjectLink(e.target.value)
                    )
                  }
                  label="Link to this project"
                  variant="outlined"
                />
                <TextField
                  value={secondProject.summary}
                  onChange={(e) =>
                    dispatch(
                      allPortfolioActions.setSecondProjectSummary(
                        e.target.value.length <= 220
                          ? e.target.value
                          : secondProject.summary
                      )
                    )
                  }
                  helperText={
                    secondProject?.summary?.length > 0
                      ? lettersCounter(secondProject.summary, 220)
                      : ""
                  }
                  label="Summary"
                  variant="outlined"
                  multiline
                  rowsMax={10}
                />
                <TextField
                  value={secondProject.whatYouDo}
                  onChange={(e) =>
                    dispatch(
                      allPortfolioActions.setSecondProjectWhatYouDo(
                        e.target.value.length <= 180
                          ? e.target.value
                          : secondProject.whatYouDo
                      )
                    )
                  }
                  helperText={
                    secondProject?.whatYouDo?.length > 0
                      ? lettersCounter(secondProject.whatYouDo, 180)
                      : ""
                  }
                  label="What you did here?"
                  variant="outlined"
                  multiline
                  rowsMax={10}
                />
              </div>
              <div className={classes.root} noValidate autoComplete="off">
                <div style={{ width: "100%" }}>
                  <Autocomplete
                    getOptionSelected={(option, value) =>
                      option.title === value.title
                    }
                    multiple
                    options={uniqueArray}
                    getOptionLabel={(option) => option.title}
                    onChange={(_, values) =>
                      dispatch(
                        allPortfolioActions.setSecondProjectStack(values)
                      )
                    }
                    value={secondProject.stack}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        placeholder="Search"
                        margin="normal"
                      />
                    )}
                  />
                </div>
              </div>
              <p>All fields are required.</p>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion hidden={showProject(secondProject, thirdProject)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <div className={classes2.heading}>
              <h3>Third project</h3>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div className={classes.root} noValidate autoComplete="off">
                <TextField
                  value={thirdProject.name}
                  onChange={(e) =>
                    dispatch(
                      allPortfolioActions.setThirdProjectName(e.target.value)
                    )
                  }
                  label="Project name"
                  variant="outlined"
                />
                <TextField
                  value={thirdProject.link}
                  onChange={(e) =>
                    dispatch(
                      allPortfolioActions.setThirdProjectLink(e.target.value)
                    )
                  }
                  label="Link to this project"
                  variant="outlined"
                />
                <TextField
                  value={thirdProject.summary}
                  onChange={(e) =>
                    dispatch(
                      allPortfolioActions.setThirdProjectSummary(
                        e.target.value.length <= 220
                          ? e.target.value
                          : thirdProject.summary
                      )
                    )
                  }
                  helperText={
                    thirdProject?.summary?.length > 0 ? lettersCounter(thirdProject.summary, 220) : ""
                  }
                  label="Summary"
                  variant="outlined"
                  multiline
                  rowsMax={10}
                />
                <TextField
                  value={thirdProject.whatYouDo}
                  onChange={(e) =>
                    dispatch(
                      allPortfolioActions.setThirdProjectWhatYouDo(
                        e.target.value.length <= 180
                          ? e.target.value
                          : thirdProject.whatYouDo
                      )
                    )
                  }
                  helperText={
                    thirdProject?.whatYouDo?.length > 0
                      ? lettersCounter(thirdProject.whatYouDo, 180)
                      : ""
                  }
                  label="What you did here?"
                  variant="outlined"
                  multiline
                  rowsMax={10}
                />
              </div>
              <div className={classes.root} noValidate autoComplete="off">
                <div style={{ width: "100%" }}>
                  <Autocomplete
                    getOptionSelected={(option, value) =>
                      option.title === value.title
                    }
                    multiple
                    options={uniqueArray}
                    getOptionLabel={(option) => option.title}
                    onChange={(_, values) =>
                      dispatch(allPortfolioActions.setThirdProjectStack(values))
                    }
                    value={thirdProject?.stack}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        placeholder="Search"
                        margin="normal"
                      />
                    )}
                  />
                </div>
              </div>
              <p>All fields are required.</p>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion hidden={showProject(thirdProject, fourthProject)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <div className={classes2.heading}>
              <h3>Fourth project</h3>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div className={classes.root} noValidate autoComplete="off">
                <TextField
                  value={fourthProject.name}
                  onChange={(e) =>
                    dispatch(
                      allPortfolioActions.setFourthProjectName(e.target.value)
                    )
                  }
                  label="Project name"
                  variant="outlined"
                />
                <TextField
                  value={fourthProject.link}
                  onChange={(e) =>
                    dispatch(
                      allPortfolioActions.setFourthProjectLink(e.target.value)
                    )
                  }
                  label="Link to this project"
                  variant="outlined"
                />
                <TextField
                  value={fourthProject.summary}
                  onChange={(e) =>
                    dispatch(
                      allPortfolioActions.setFourthProjectSummary(
                        e.target.value.length <= 220
                          ? e.target.value
                          : fourthProject.summary
                      )
                    )
                  }
                  helperText={
                    fourthProject?.summary?.length > 0
                      ? lettersCounter(fourthProject.summary, 220)
                      : ""
                  }
                  label="Summary"
                  variant="outlined"
                  multiline
                  rowsMax={10}
                />
                <TextField
                  value={fourthProject.whatYouDo}
                  onChange={(e) =>
                    dispatch(
                      allPortfolioActions.setFourthProjectWhatYouDo(
                        e.target.value.length <= 180
                          ? e.target.value
                          : fourthProject.whatYouDo
                      )
                    )
                  }
                  helperText={
                    fourthProject?.whatYouDo?.length > 0
                      ? lettersCounter(fourthProject.whatYouDo, 180)
                      : ""
                  }
                  label="What you did here?"
                  variant="outlined"
                  multiline
                  rowsMax={10}
                />
              </div>
              <div className={classes.root} noValidate autoComplete="off">
                <div style={{ width: "100%" }}>
                  <Autocomplete
                    getOptionSelected={(option, value) =>
                      option.title === value.title
                    }
                    multiple
                    options={uniqueArray}
                    getOptionLabel={(option) => option.title}
                    onChange={(_, values) =>
                      dispatch(
                        allPortfolioActions.setFourthProjectStack(values)
                      )
                    }
                    value={fourthProject.stack}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        placeholder="Search"
                        margin="normal"
                      />
                    )}
                  />
                </div>
              </div>
              <p>All fields are required.</p>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion hidden={showProject(fourthProject, fifthProject)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <div className={classes2.heading}>
              <h3>Fifth project</h3>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div className={classes.root} noValidate autoComplete="off">
                <TextField
                  value={fifthProject.name}
                  onChange={(e) =>
                    dispatch(
                      allPortfolioActions.setFifthProjectName(e.target.value)
                    )
                  }
                  label="Project name"
                  variant="outlined"
                />
                <TextField
                  value={fifthProject.link}
                  onChange={(e) =>
                    dispatch(
                      allPortfolioActions.setFifthProjectLink(e.target.value)
                    )
                  }
                  label="Link to this project"
                  variant="outlined"
                />
                <TextField
                  value={fifthProject.summary}
                  onChange={(e) =>
                    dispatch(
                      allPortfolioActions.setFifthProjectSummary(
                        e.target.value.length <= 220
                          ? e.target.value
                          : fifthProject.summary
                      )
                    )
                  }
                  helperText={
                    fifthProject?.summary?.length > 0 ? lettersCounter(fifthProject.summary, 220) : ""
                  }
                  label="Summary"
                  variant="outlined"
                  multiline
                  rowsMax={10}
                />
                <TextField
                  value={fifthProject.whatYouDo}
                  onChange={(e) =>
                    dispatch(
                      allPortfolioActions.setFifthProjectWhatYouDo(
                        e.target.value.length <= 180
                          ? e.target.value
                          : fifthProject.whatYouDo
                      )
                    )
                  }
                  helperText={
                    fifthProject?.whatYouDo?.length > 0
                      ? lettersCounter(fifthProject.whatYouDo, 180)
                      : ""
                  }
                  label="What you did here?"
                  variant="outlined"
                  multiline
                  rowsMax={10}
                />
              </div>
              <div className={classes.root} noValidate autoComplete="off">
                <div style={{ width: "100%" }}>
                  <Autocomplete
                    getOptionSelected={(option, value) =>
                      option.title === value.title
                    }
                    multiple
                    options={uniqueArray}
                    getOptionLabel={(option) => option.title}
                    onChange={(_, values) =>
                      dispatch(allPortfolioActions.setFifthProjectStack(values))
                    }
                    value={fifthProject.stack}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        placeholder="Search"
                        margin="normal"
                      />
                    )}
                  />
                </div>
              </div>
              <p>All fields are required.</p>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion hidden={showProject(fifthProject, sixthProject)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <div className={classes2.heading}>
              <h3>Sixth project</h3>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div className={classes.root} noValidate autoComplete="off">
                <TextField
                  value={sixthProject.name}
                  onChange={(e) =>
                    dispatch(
                      allPortfolioActions.setSixthProjectName(e.target.value)
                    )
                  }
                  label="Project name"
                  variant="outlined"
                />
                <TextField
                  value={sixthProject.link}
                  onChange={(e) =>
                    dispatch(
                      allPortfolioActions.setSixthProjectLink(e.target.value)
                    )
                  }
                  label="Link to this project"
                  variant="outlined"
                />
                <TextField
                  value={sixthProject.summary}
                  onChange={(e) =>
                    dispatch(
                      allPortfolioActions.setSixthProjectSummary(
                        e.target.value.length <= 220
                          ? e.target.value
                          : sixthProject.summary
                      )
                    )
                  }
                  helperText={
                    sixthProject?.summary?.length > 0 ? lettersCounter(sixthProject.summary, 220) : ""
                  }
                  label="Summary"
                  variant="outlined"
                  multiline
                  rowsMax={10}
                />
                <TextField
                  value={sixthProject.whatYouDo}
                  onChange={(e) =>
                    dispatch(
                      allPortfolioActions.setSixthProjectWhatYouDo(
                        e.target.value.length <= 180
                          ? e.target.value
                          : sixthProject.whatYouDo
                      )
                    )
                  }
                  helperText={
                    sixthProject?.whatYouDo?.length > 0
                      ? lettersCounter(sixthProject.whatYouDo, 180)
                      : ""
                  }
                  label="What you did here?"
                  variant="outlined"
                  multiline
                  rowsMax={10}
                />
              </div>
              <div className={classes.root} noValidate autoComplete="off">
                <div style={{ width: "100%" }}>
                  <Autocomplete
                    multiple
                    options={uniqueArray}
                    getOptionSelected={(option, value) =>
                      option.title === value.title
                    }
                    getOptionLabel={(option) => option.title}
                    onChange={(_, values) =>
                      dispatch(allPortfolioActions.setSixthProjectStack(values))
                    }
                    value={sixthProject.stack}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        placeholder="Search"
                        margin="normal"
                      />
                    )}
                  />
                </div>
              </div>
              <p>All fields are required.</p>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default Portfolio;
