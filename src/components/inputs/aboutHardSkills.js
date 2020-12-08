import React from 'react'
import TextField from '@material-ui/core/TextField';
import allHardSkillsActions from '../../actions/aboutHardSkillsActions';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import NoSsr from '@material-ui/core/NoSsr';
import Autocomplete from '@material-ui/lab/Autocomplete';



import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
    


    const top100Films = [
      { title: 'The Shawshank Redemption', year: 1994 },
      { title: 'The Godfather', year: 1972 },
      { title: 'The Godfather: Part II', year: 1974 },
      { title: 'The Dark Knight', year: 2008 },
      { title: '12 Angry Men', year: 1957 },
      { title: "Schindler's List", year: 1993 },
      { title: 'Pulp Fiction', year: 1994 },
      { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
      { title: 'The Good, the Bad and the Ugly', year: 1966 },
      { title: 'Fight Club', year: 1999 },
      { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
      { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
      { title: 'Forrest Gump', year: 1994 },
      { title: 'Inception', year: 2010 },
    ];

const AboutHardSkills = () => {
    

    const classes = useStyles();
    const classes2 = useStyles2();

    const dispatch = useDispatch()

    const {frontend, backend, dbs, other} = useSelector(state => state.aboutHardSkillsReducer)

    return (
        <div className='container-pdf'>
            <div className={classes2.root}>
       <Accordion>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={classes2.heading}><h2>Tell about your technical skills.</h2></div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
          <form className={classes.root} noValidate autoComplete="off">
            
            <div style={{ width: 500 }}>
              <h3>Frontend: </h3>
        <Autocomplete
          multiple
          options={top100Films}
          getOptionLabel={option => option.title}
          onChange={(_, values) => dispatch(allHardSkillsActions.setFrontendAction(values))}
          value={frontend}
          renderInput={params => (
            <TextField

              {...params}
              variant="standard"
              placeholder="Search"
              margin="normal"
              fullWidth
            />
          )}
        />
      </div>
            
                 </form>
            <h3>Backend: </h3>
            <form className={classes.root} noValidate autoComplete="off">
            <div style={{ width: 500 }}>
        <Autocomplete
          multiple
          options={top100Films}
          getOptionLabel={option => option.title}
          onChange={(_, values) => dispatch(allHardSkillsActions.setBackendAction(values))}
          value={backend}

          renderInput={params => (
            <TextField
          

              {...params}
              variant="standard"
              placeholder="Search"
              margin="normal"
              fullWidth
            />
          )}
        />
      </div>
           
                </form>
            <h3>DBS: </h3>
            <form className={classes.root} noValidate autoComplete="off">
            <div style={{ width: 500 }}>
        <Autocomplete
          multiple
          options={top100Films}
          getOptionLabel={option => option.title}
          onChange={(_, values) => dispatch(allHardSkillsActions.setDbsAction(values))}
          value={dbs}

          renderInput={params => (
            <TextField
         

              {...params}
              variant="standard"
              placeholder="Search"
              margin="normal"
              fullWidth
            />
          )}
        />
      </div>
          
            </form>
            <h3>Other: </h3>
            <form className={classes.root} noValidate autoComplete="off">
            <div style={{ width: 500 }}>
        <Autocomplete
          multiple
          options={top100Films}
          getOptionLabel={option => option.title}
          onChange={(_, values) => dispatch(allHardSkillsActions.setOtherAction(values))}
          value={other}

          renderInput={params => (
            <TextField

              {...params}
              variant="standard"
              placeholder="Search"
              margin="normal"
              fullWidth
            />
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

