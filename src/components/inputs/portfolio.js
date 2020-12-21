import React from 'react'
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import allPortfolioActions from '../../actions/portfolioActions';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Autocomplete from '@material-ui/lab/Autocomplete';
import top100Films from '../../constants/stack';






const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const useStyles2 = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {


    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));


const Portfolio = () => {
  const dispatch = useDispatch()

  const { firstProject, secondProject, thirdProject, fourthProject, fifthProject, sixthProject } = useSelector(state => state.portfolioReducer)

  const classes = useStyles();
  const classes2 = useStyles2();


  const {techList} = useSelector(state => state.addTechnologyReducer)
  let uniqueArray = top100Films.concat(techList).concat()

  let firstSummaryCounter = (220 - firstProject.summary.length) + ' letters left.'
  let firstWhatYouDoCounter = (180 - firstProject.whatYouDo.length) + ' letters left.'
  let secondSummaryCounter = (220 - secondProject.summary.length) + ' letters left.'
  let secondWhatYouDoCounter = (180 - secondProject.whatYouDo.length) + ' letters left.'
  let thirdSummaryCounter = (220 - thirdProject.summary.length) + ' letters left.'
  let thirdWhatYouDoCounter = (180 - thirdProject.whatYouDo.length) + ' letters left.'
  let fourthSummaryCounter = (220 - fourthProject.summary.length) + ' letters left.'
  let fourthWhatYouDoCounter = (180 - fourthProject.whatYouDo.length) + ' letters left.'
  let fifthSummaryCounter = (220 - fifthProject.summary.length) + ' letters left.'
  let fifthWhatYouDoCounter = (180 - fifthProject.whatYouDo.length) + ' letters left.'
  let sixthSummaryCounter = (220 - sixthProject.summary.length) + ' letters left.'
  let sixthWhatYouDoCounter = (180 - sixthProject.whatYouDo.length) + ' letters left.'

  let showSecond = (!(firstProject.name && firstProject.link && firstProject.summary && firstProject.whatYouDo && firstProject.stack.length>0) && !(secondProject.name || secondProject.link || secondProject.summary || secondProject.whatYouDo || secondProject.stack.length>0))
  let showThird = (!(secondProject.name && secondProject.link && secondProject.summary && secondProject.whatYouDo && secondProject.stack.length>0) && !(thirdProject.name || thirdProject.link || thirdProject.summary || thirdProject.whatYouDo || thirdProject.stack.length>0))
  let showFourth = (!(thirdProject.name && thirdProject.link && thirdProject.summary && thirdProject.whatYouDo && thirdProject.stack.length>0) && !(fourthProject.name || fourthProject.link || fourthProject.summary || fourthProject.whatYouDo || fourthProject.stack.length>0))
  let showFifth = (!(fourthProject.name && fourthProject.link && fourthProject.summary && fourthProject.whatYouDo && fourthProject.stack.length>0) && !(fifthProject.name || fifthProject.link || fifthProject.summary || fifthProject.whatYouDo || fifthProject.stack.length>0))
  let showSixth = (!(fifthProject.name && fifthProject.link && fifthProject.summary && fifthProject.whatYouDo && fifthProject.stack.length>0) && !(sixthProject.name || sixthProject.link || sixthProject.summary || sixthProject.whatYouDo || sixthProject.stack.length>0))

  return (
    <div className='container'>
      <div className={classes2.root}>
        <h2 className='t-1'>Tell about your best projects.</h2>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div >
              <h3>First project.</h3>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField value={firstProject.name} onChange={e => dispatch(allPortfolioActions.setFirstProjectName(e.target.value))} label="Project name" variant="outlined" />
                <TextField value={firstProject.link} onChange={e => dispatch(allPortfolioActions.setFirstProjectLink(e.target.value))} label='Link to this project' variant='outlined' />
                <TextField
                  value={firstProject.summary}
                  onChange={e => dispatch(allPortfolioActions.setFirstProjectSummary(e.target.value.length <= 220 ? e.target.value : firstProject.summary))}
                  helperText={firstProject.summary.length > 0 ? firstSummaryCounter : ''}
                  label='Summary'
                  variant='outlined'
                  multiline
                  rowsMax={10}
                  id="outlined-multiline-flexible" />
                <TextField value={firstProject.whatYouDo}
                  onChange={e => dispatch(allPortfolioActions.setFirstProjectWhatYouDo(e.target.value.length <= 180 ? e.target.value : firstProject.whatYouDo))}
                  helperText={firstProject.whatYouDo.length > 0 ? firstWhatYouDoCounter : ''}
                  label='What you did here?'
                  variant='outlined'
                  multiline
                  rowsMax={10}
                  id="outlined-multiline-flexible" />
              </form>
              <h3>Stack:</h3>
              <form className={classes.root} noValidate autoComplete="off">
                <div style={{ width: '100%' }}>
                  <Autocomplete
                    multiple
                    options={uniqueArray}
                    getOptionLabel={option => option.title}
                    onChange={(_, values) => dispatch(allPortfolioActions.setFirstProjectStack(values))}
                    value={firstProject.stack}

                    renderInput={params => (
                      <TextField

                        {...params}
                        variant="standard"
                        placeholder="Search"
                        margin="normal"
                      
                      />
                    )}
                  />
                </div>
                </form>
              <h4>
                All fields are required.</h4>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion hidden={showSecond}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <div className={classes2.heading} ><h3>Second project</h3></div>
          </AccordionSummary>
          <AccordionDetails>
            <div>

              <form className={classes.root} noValidate autoComplete="off">
                <TextField value={secondProject.name} onChange={e => dispatch(allPortfolioActions.setSecondProjectName(e.target.value))} label="Project name" variant="outlined" />
                <TextField value={secondProject.link} onChange={e => dispatch(allPortfolioActions.setSecondProjectLink(e.target.value))} label='Link to this project' variant='outlined' />
                <TextField
                  value={secondProject.summary}
                  onChange={e => dispatch(allPortfolioActions.setSecondProjectSummary(e.target.value.length <= 220 ? e.target.value : secondProject.summary))}
                  helperText={secondProject.summary.length > 0 ? secondSummaryCounter : ''}
                  label='Summary'
                  variant='outlined'
                  multiline
                  rowsMax={10}
                  id="outlined-multiline-flexible" />
                <TextField
                  value={secondProject.whatYouDo}
                  onChange={e => dispatch(allPortfolioActions.setSecondProjectWhatYouDo(e.target.value.length <= 180 ? e.target.value : secondProject.whatYouDo))}
                  helperText={secondProject.whatYouDo.length > 0 ? secondWhatYouDoCounter : ''}
                  label='What you did here?'
                  variant='outlined'
                  multiline
                  rowsMax={10}
                  id="outlined-multiline-flexible" />
              </form>
              <form className={classes.root} noValidate autoComplete="off">
                <div style={{ width: '100%' }}>
                  <Autocomplete
                    multiple
                    options={uniqueArray}
                    getOptionLabel={option => option.title}
                    onChange={(_, values) => dispatch(allPortfolioActions.setSecondProjectStack(values))}
                    value={secondProject.stack}

                    renderInput={params => (
                      <TextField

                        {...params}
                        variant="standard"
                        placeholder="Search"
                        margin="normal"
                      
                      />
                    )}
                  />
                </div>
                </form>
              <p>
                All fields are required.</p>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion hidden={showThird}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <div className={classes2.heading}><h3>Third project</h3></div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField value={thirdProject.name} onChange={e => dispatch(allPortfolioActions.setThirdProjectName(e.target.value))} label="Project name" variant="outlined" />
                <TextField value={thirdProject.link} onChange={e => dispatch(allPortfolioActions.setThirdProjectLink(e.target.value))} label='Link to this project' variant='outlined' />
                <TextField
                  value={thirdProject.summary}
                  onChange={e => dispatch(allPortfolioActions.setThirdProjectSummary(e.target.value.length <= 220 ? e.target.value : thirdProject.summary))}
                  helperText={thirdProject.summary.length > 0 ? thirdSummaryCounter : ''}
                  label='Summary'
                  variant='outlined'
                  multiline
                  rowsMax={10}
                  id="outlined-multiline-flexible" />
                <TextField
                  value={thirdProject.whatYouDo}
                  onChange={e => dispatch(allPortfolioActions.setThirdProjectWhatYouDo(e.target.value.length <= 180 ? e.target.value : thirdProject.whatYouDo))}
                  helperText={thirdProject.whatYouDo.length > 0 ? thirdWhatYouDoCounter : ''}
                  label='What you did here?'
                  variant='outlined'
                  multiline
                  rowsMax={10}
                  id="outlined-multiline-flexible" />
              </form>
              <form className={classes.root} noValidate autoComplete="off">
                <div style={{ width: '100%' }}>
                  <Autocomplete
                    multiple
                    options={uniqueArray}
                    getOptionLabel={option => option.title}
                    onChange={(_, values) => dispatch(allPortfolioActions.setThirdProjectStack(values))}
                    value={thirdProject.stack}

                    renderInput={params => (
                      <TextField

                        {...params}
                        variant="standard"
                        placeholder="Search"
                        margin="normal"
                       
                      />
                    )}
                  />
                </div>
                </form>
              <p>
                All fields are required.</p>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion hidden={showFourth}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <div className={classes2.heading}><h3>Fourth project</h3></div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField value={fourthProject.name} onChange={e => dispatch(allPortfolioActions.setFourthProjectName(e.target.value))} label="Project name" variant="outlined" />
                <TextField value={fourthProject.link} onChange={e => dispatch(allPortfolioActions.setFourthProjectLink(e.target.value))} label='Link to this project' variant='outlined' />
                <TextField
                  value={fourthProject.summary}
                  onChange={e => dispatch(allPortfolioActions.setFourthProjectSummary(e.target.value.length <= 220 ? e.target.value : fourthProject.summary))}

                  helperText={fourthProject.summary.length > 0 ? fourthSummaryCounter : ''}
                  label='Summary'
                  variant='outlined'
                  multiline
                  rowsMax={10}
                  id="outlined-multiline-flexible" />
                <TextField
                  value={fourthProject.whatYouDo}
                  onChange={e => dispatch(allPortfolioActions.setFourthProjectWhatYouDo(e.target.value.length <= 180 ? e.target.value : fourthProject.whatYouDo))}
                  helperText={fourthProject.whatYouDo.length > 0 ? fourthWhatYouDoCounter : ''}
                  label='What you did here?'
                  variant='outlined'
                  multiline
                  rowsMax={10}
                  id="outlined-multiline-flexible" />
              </form>
              <form className={classes.root} noValidate autoComplete="off">
                <div style={{ width: '100%' }}>
                  <Autocomplete
                    multiple
                    options={uniqueArray}
                    getOptionLabel={option => option.title}
                    onChange={(_, values) => dispatch(allPortfolioActions.setFourthProjectStack(values))}
                    value={fourthProject.stack}

                    renderInput={params => (
                      <TextField

                        {...params}
                        variant="standard"
                        placeholder="Search"
                        margin="normal"
                       
                      />
                    )}
                  />
                </div>
                </form>
              <p>
                All fields are required.</p>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion hidden={showFifth}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <div className={classes2.heading}><h3>Fifth project</h3></div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField value={fifthProject.name} onChange={e => dispatch(allPortfolioActions.setFifthProjectName(e.target.value))} label="Project name" variant="outlined" />
                <TextField value={fifthProject.link} onChange={e => dispatch(allPortfolioActions.setFifthProjectLink(e.target.value))} label='Link to this project' variant='outlined' />
                <TextField
                  value={fifthProject.summary}
                  onChange={e => dispatch(allPortfolioActions.setFifthProjectSummary(e.target.value.length <= 220 ? e.target.value : fifthProject.summary))}

                  helperText={fifthProject.summary.length > 0 ? fifthSummaryCounter : ''}
                  label='Summary'
                  variant='outlined'
                  multiline
                  rowsMax={10}
                  id="outlined-multiline-flexible" />
                <TextField
                  value={fifthProject.whatYouDo}
                  onChange={e => dispatch(allPortfolioActions.setFifthProjectWhatYouDo(e.target.value.length <= 180 ? e.target.value : fifthProject.whatYouDo))}
                  helperText={fifthProject.whatYouDo.length > 0 ? fifthWhatYouDoCounter : ''}
                  label='What you did here?'
                  variant='outlined'
                  multiline
                  rowsMax={10}
                  id="outlined-multiline-flexible" />
              </form>
              <form className={classes.root} noValidate autoComplete="off">
                <div style={{ width: '100%' }}>
                  <Autocomplete
                    multiple
                    options={uniqueArray}
                    getOptionLabel={option => option.title}
                    onChange={(_, values) => dispatch(allPortfolioActions.setFifthProjectStack(values))}
                    value={fifthProject.stack}

                    renderInput={params => (
                      <TextField

                        {...params}
                        variant="standard"
                        placeholder="Search"
                        margin="normal"
                       
                      />
                    )}
                  />
                </div>
                </form>
              <p>
                All fields are required.</p>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion hidden={showSixth}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <div className={classes2.heading}><h3>Sixth project</h3></div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField value={sixthProject.name} onChange={e => dispatch(allPortfolioActions.setSixthProjectName(e.target.value))} label="Project name" variant="outlined" />
                <TextField value={sixthProject.link} onChange={e => dispatch(allPortfolioActions.setSixthProjectLink(e.target.value))} label='Link to this project' variant='outlined' />
                <TextField
                  value={sixthProject.summary}
                  onChange={e => dispatch(allPortfolioActions.setSixthProjectSummary(e.target.value.length <= 220 ? e.target.value : sixthProject.summary))}

                  helperText={sixthProject.summary.length > 0 ? sixthSummaryCounter : ''}
                  label='Summary'
                  variant='outlined'
                  multiline
                  rowsMax={10}
                  id="outlined-multiline-flexible" />
                <TextField
                  value={sixthProject.whatYouDo}
                  onChange={e => dispatch(allPortfolioActions.setSixthProjectWhatYouDo(e.target.value.length <= 180 ? e.target.value : sixthProject.whatYouDo))}
                  helperText={sixthProject.whatYouDo.length > 0 ? sixthWhatYouDoCounter : ''}
                  label='What you did here?'
                  variant='outlined'
                  multiline
                  rowsMax={10}
                  id="outlined-multiline-flexible" />
              </form>
              <form className={classes.root} noValidate autoComplete="off">
                <div style={{ width: '100%' }}>
                  <Autocomplete
                    multiple
                    options={uniqueArray}
                    getOptionLabel={option => option.title}
                    onChange={(_, values) => dispatch(allPortfolioActions.setSixthProjectStack(values))}
                    value={sixthProject.stack}

                    renderInput={params => (
                      <TextField

                        {...params}
                        variant="standard"
                        placeholder="Search"
                        margin="normal"
                       
                      />
                    )}
                  />
                </div>
                </form>
              <p>
                All fields are required.</p>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>




    </div>
  )
}

export default Portfolio


