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
      { title: 'АngularJS'},
      { title: 'Backbone.js'},
      { title: 'Base'},
      { title: 'Basscss'},
      { title: 'bone.io'},
      { title: "bootstrap "},
      { title: 'CakePHP '},
      { title: 'CodeIgniter'},
      { title: 'ConciseCSS'},
      { title: 'Fight Club'},
      { title: 'Ember.js '},
      { title: 'Express'},
      { title: 'Famo.us '},
      { title: 'Foundation'},
      { title: 'Ionicframework'},
      { title: 'Kohana'},
      { title: 'Laravel'},
      { title: 'Lumen'},
      { title: 'LumX '},
      { title: 'Materialize'},
      { title: 'Mean'},
      { title: 'medoo'},
      { title: 'meteor'},
      { title: 'Neat bourbon'},
      { title: 'Nodejs'},
      { title: 'Phalcon Framework'},
      { title: 'Phaser'},
      { title: 'Pintsize'},
      { title: 'React'},
      { title: 'Reapp'},
      { title: 'Ruby on Rails'},
      { title: 'Spacebase'},
      { title: 'Symfony'},
      { title: 'Themosis'},
      { title: 'UIKit'},
      { title: 'Vaadin'},
      { title: 'YAML'},
      { title: 'NET Framework'},
      { title: 'widget toolkit['},
      { title: 'wxWidgets'},
      { title: 'Qt'},
      { title: 'MyCoRe'},
      { title: 'FOX toolkit'},
      { title: 'Zend Framework'},
      { title: 'W3.css'},
      { title: 'Twitter Flight'},
      { title: 'Blueprint'},
      { title: '960 Grid System'},
      { title: 'Yet Another Multicolumn Layout (YAML)'},
      { title: 'css-framework'},
      { title: 'Gumby Framework'},
      { title: 'Golden Grid System'},
      { title: 'Topcoat'},
      { title: 'Compass'},
      { title: 'Rest Css Framework'},
      { title: 'jQuery UI CSS Framework'},
      { title: 'CSS-based Slideshow System'},
      { title: 'CanJS'},
      { title: 'Ractive JS'},
      { title: 'Knockout JS'},
      { title: 'rAppid JS'},
      { title: 'batman js'},
      { title: 'Spine'},
      { title: 'Webix UI Library'},
      { title: 'DHTMLX'},
      { title: 'Ext JS'},
      { title: 'Jquery UI'},
      { title: 'Vue.js'},
      { title: 'Skeleton'},
      { title: 'GIT'},
      { title: 'Appcelerator Titanium'},
      { title: 'Aurelia.js'},
      { title: 'React Native'},
      { title: 'Ionic'},
      { title: 'GatsbyJS'},
      { title: 'Electron'},
      { title: 'Mocha'},
      { title: 'Material components web'},
      { title: 'Polymer elements'},
      { title: 'Vaadin web components'},
      { title: 'Wired elements'},
      { title: 'Elix'},
      { title: 'Time elements'},
      { title: 'UI5-webcomponents'},
      { title: 'Patternfly'},
      { title: 'Web components org'},
      { title: 'Rebass'},
      { title: 'Ant-design'},
      { title: 'React Bootstrap'},
      { title: 'Material UI'},
      { title: 'React Spinner'},
      { title: 'Semantic UI React'},
      { title: 'Grommet'},
      { title: 'Gestalt'},
      { title: 'Fabric React'},
      { title: 'OnsenUI'},
      { title: 'React Virtualized'},
      { title: 'Blueprint'},
      { title: 'React Desktop'},
      { title: 'Requests'},
      { title: 'Simplejson'},
      { title: 'SQL Alchemy'},
      { title: 'TensorFlow'},
      { title: 'Scrapy'},
      { title: 'Matplotlib'},
      { title: 'Scikit-Learn'},
      { title: 'Pygame'},
      { title: 'Arrow'},
      { title: 'wxPython'},
      { title: 'Github'},
      { title: 'Code Igniter'},
      { title: 'Yii2'},
      { title: 'Zend'},
      { title: 'CakePHP'},
      { title: 'FuelPHP'},
      { title: 'Directual'},
      { title: '.NET Framework'},
      { title: 'Drupal CMF'},
      { title: 'Prototype'},
      { title: 'MooTools'},
      { title: 'Underscore.js'},
      { title: 'Sass'},
      { title: 'Scss'},
      { title: 'Fontsquirrel'},
      { title: 'Colorzilla'},
      { title: 'Sprite'},
      { title: 'PhpStorm'},
      { title: 'gulp'},
      { title: 'Prettier'},
      { title: 'Figma'},
      { title: 'Optimizilla'},
      { title: 'Clip path'},
      { title: 'Favicon generator'},
      { title: 'json editor online'},
      { title: 'js fiddle'},
      { title: 'pug'},
      { title: 'VirtualBox'},
      { title: 'jQuery FancyBox'},
      { title: 'Device'},
      { title: 'Snap svg'},
      { title: 'GSAP.js'},
      { title: 'jQuery Form Styler'},
      { title: 'JQuery UI'},
      { title: 'Barba.js'},
      { title: 'JQuery scroll bar'},
      { title: 'Notepad ++'},
      { title: 'Visual Studio Code'},
      { title: 'Webshorm'},
      { title: 'Vim'},
      { title: 'Eclipse'},
      { title: 'Atom'},
      { title: 'Adobe Dreamweaver CC'},
      { title: 'SVN'},
      { title: 'Mercurial'},
      { title: 'Bazaar'},
      { title: 'TFS '},
      { title: 'CVS'},
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

