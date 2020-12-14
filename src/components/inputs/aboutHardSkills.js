import React from "react";
import TextField from "@material-ui/core/TextField";
import allHardSkillsActions from "../../actions/aboutHardSkillsActions";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import allTechnologyActions from "../../actions/addTechnologyActions";
import top100Films from "../../constants/stack";
import frontendStack from "../../constants/frontendStack";




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




const AboutHardSkills = () => {


  const classes = useStyles();
  const classes2 = useStyles2();
 

  const dispatch = useDispatch()

  const { frontend, backend, dbs, other } = useSelector(state => state.aboutHardSkillsReducer)

  const {frontendTech, backendTech, dbsTech, otherTech, techList} = useSelector(state => state.addTechnologyReducer)

  const addTech= (e, technology) => {
    e.preventDefault()
    dispatch(allTechnologyActions.addTechnologyAction(technology, techList, top100Films))
  }

  let showFrontendButton = !frontendTech
  let showBackendButton = !backendTech
  let showDbsButton = !dbsTech
  let showOtherButton = !otherTech



  let uniqueFrontendStack = frontendStack.concat(techList).concat()


  uniqueFrontendStack = uniqueFrontendStack.filter((item, index, self) =>
  index === self.findIndex((t) => (
    t.title.toLowerCase() === item.title.toLowerCase() 
  ))
)


  let uniqueArray = top100Films.concat(techList).concat()

  uniqueArray = uniqueArray.filter((item, index, self) =>
  index === self.findIndex((t) => (
    t.title.toLowerCase() === item.title.toLowerCase() 
  ))
)

  return (
    <div className='container-pdf'>
      <div className={classes2.root}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className={classes2.heading}>
              <h2>Tell about your technical skills.</h2>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <form  className={classes.root} noValidate autoComplete="off">
                <div style={{ width: 500 }}>
                  <h3>Frontend: </h3>
                  
                  <Autocomplete
                    multiple
                    options={uniqueFrontendStack}
                    getOptionLabel={(option) => option.title}
                    onChange={(_, values) =>
                      {dispatch(allHardSkillsActions.setFrontendAction(values))
                      dispatch(allTechnologyActions.setClearTechnologiesAction())}
                    }
                    value={frontend}
                    inputValue={frontendTech}
                    renderInput={(params) => (
                      <div className='bloblo'><TextField
                        {...params}
                        variant="standard"
                        placeholder="Search"
                        margin="normal"
                        
                        fullWidth
                        value={frontendTech}
                        onChange={e=>dispatch(allTechnologyActions.setFrontendTechnologyAction(e.target.value))}
                      /><div hidden={showFrontendButton} className='inoutinput'><Fab  onClick={(e) => addTech(e, frontendTech)} size="small" color="primary" type='submit' aria-label="add">
                      <AddIcon />
                    </Fab></div>
                        
                      </div>
                    )}
                  />
                </div>
              </form>
              <h3>Backend: </h3>
              <form className={classes.root} noValidate autoComplete="off">
                <div style={{ width: 500 }}>
                  <Autocomplete
                    multiple
                    options={uniqueArray}
                    getOptionLabel={option => option.title}
                    onChange={(_, values) => {dispatch(allHardSkillsActions.setBackendAction(values))
                      dispatch(allTechnologyActions.setClearTechnologiesAction())}}
                    value={backend}
                    inputValue={backendTech}
                    renderInput={params => (
                      <div className='bloblo'><TextField


                        {...params}
                        value={backendTech}
                        onChange={e=>dispatch(allTechnologyActions.setBackendTechnologyAction(e.target.value))}
                        variant="standard"
                        placeholder="Search"
                        margin="normal"
                        fullWidth
                      />
                      <div hidden={showBackendButton} className='inoutinput'><Fab  onClick={(e) => addTech(e, backendTech)} size="small" color="primary" type='submit' aria-label="add">
                      <AddIcon />
                    </Fab></div></div>
                    )}
                  />
                </div>
              </form>
              <h3>DBS: </h3>
              <form className={classes.root} noValidate autoComplete="off">
                <div style={{ width: 500 }}>
                  <Autocomplete
                    multiple
                    options={uniqueArray}
                    getOptionLabel={option => option.title}
                    onChange={(_, values) => {dispatch(allHardSkillsActions.setDbsAction(values))
                      dispatch(allTechnologyActions.setClearTechnologiesAction())}}
                    value={dbs}
                    inputValue={dbsTech}
                    renderInput={params => (
                      <div className='bloblo'><TextField


                        {...params}
                        value={dbsTech}
                        onChange={e=>dispatch(allTechnologyActions.setDbsTechnologyAction(e.target.value))}
                        variant="standard"
                        placeholder="Search"
                        margin="normal"
                        fullWidth
                      />
                      <div hidden={showDbsButton} className='inoutinput'><Fab  onClick={(e) => addTech(e, dbsTech)} size="small" color="primary" type='submit' aria-label="add">
                      <AddIcon />
                    </Fab></div>
                      </div>
                    )}
                  />
                </div>
              </form>
              <h3>Other: </h3>
              <form className={classes.root} noValidate autoComplete="off">
                <div style={{ width: 500 }}>
                  <Autocomplete
                    multiple
                    options={uniqueArray}
                    getOptionLabel={option => option.title}
                    onChange={(_, values) => {dispatch(allHardSkillsActions.setOtherAction(values))
                      dispatch(allTechnologyActions.setClearTechnologiesAction())}}
                    value={other}
                    inputValue={otherTech}

                    renderInput={params => (
                      <div className='bloblo'><TextField

                        {...params}
                        value={otherTech}
                        onChange={e=>dispatch(allTechnologyActions.setOtherTechnologyAction(e.target.value))}
                        variant="standard"
                        placeholder="Search"
                        margin="normal"
                        fullWidth
                      />
                      <div hidden={showOtherButton} className='inoutinput'><Fab  onClick={(e) => addTech(e, otherTech)} size="small" color="primary" type='submit' aria-label="add">
                      <AddIcon />
                    </Fab></div>
                    </div>
                    )}
                  />
                </div>
              </form>
            </div>
          </AccordionDetails>
        </Accordion>

      </div>

    </div>
  )
}


export default AboutHardSkills

