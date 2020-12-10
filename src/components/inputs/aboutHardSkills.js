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



export const top100Films = [
  { title: 'АngularJS' },
  { title: 'Backbone.js' },
  { title: 'Base' },
  { title: 'Basscss' },
  { title: 'bone.io' },
  { title: "bootstrap" },
  { title: 'CakePHP' },
  { title: 'CodeIgniter' },
  { title: 'ConciseCSS' },
  { title: 'Ember.js' },
  { title: 'Express' },
  { title: 'Famo.us' },
  { title: 'Foundation' },
  { title: 'Ionicframework' },
  { title: 'Kohana' },
  { title: 'Laravel' },
  { title: 'Lumen' },
  { title: 'LumX' },
  { title: 'Materialize' },
  { title: 'Mean' },
  { title: 'medoo' },
  { title: 'meteor' },
  { title: 'Neat bourbon' },
  { title: 'Nodejs' },
  { title: 'Phalcon Framework' },
  { title: 'Phaser' },
  { title: 'Pintsize' },
  { title: 'React' },
  { title: 'Reapp' },
  { title: 'Ruby on Rails' },
  { title: 'Spacebase' },
  { title: 'Symfony' },
  { title: 'Themosis' },
  { title: 'UIKit' },
  { title: 'Vaadin' },
  { title: 'YAML' },
  { title: 'NET Framework' },
  { title: 'widget toolkit' },
  { title: 'wxWidgets' },
  { title: 'Qt' },
  { title: 'MyCoRe' },
  { title: 'FOX toolkit' },
  { title: 'Zend Framework' },
  { title: 'W3.css' },
  { title: 'Twitter Flight' },
  { title: 'Blueprint' },
  { title: '960 Grid System' },
  { title: 'Yet Another Multicolumn Layout (YAML)' },
  { title: 'css-framework' },
  { title: 'Gumby Framework' },
  { title: 'Golden Grid System' },
  { title: 'Topcoat' },
  { title: 'Compass' },
  { title: 'Rest Css Framework' },
  { title: 'jQuery UI CSS Framework' },
  { title: 'CSS-based Slideshow System' },
  { title: 'CanJS' },
  { title: 'Ractive JS' },
  { title: 'Knockout JS' },
  { title: 'rAppid JS' },
  { title: 'batman js' },
  { title: 'Spine' },
  { title: 'Webix UI Library' },
  { title: 'DHTMLX' },
  { title: 'Ext JS' },
  { title: 'Jquery UI' },
  { title: 'Vue.js' },
  { title: 'Skeleton' },
  { title: 'GIT' },
  { title: 'Appcelerator Titanium' },
  { title: 'Aurelia.js' },
  { title: 'React Native' },
  { title: 'Ionic' },
  { title: 'GatsbyJS' },
  { title: 'Electron' },
  { title: 'Mocha' },
  { title: 'Material components web' },
  { title: 'Polymer elements' },
  { title: 'Vaadin web components' },
  { title: 'Wired elements' },
  { title: 'Elix' },
  { title: 'Time elements' },
  { title: 'UI5-webcomponents' },
  { title: 'Patternfly' },
  { title: 'Web components org' },
  { title: 'Rebass' },
  { title: 'Ant-design' },
  { title: 'React Bootstrap' },
  { title: 'Material UI' },
  { title: 'React Spinner' },
  { title: 'Semantic UI React' },
  { title: 'Grommet' },
  { title: 'Gestalt' },
  { title: 'Fabric React' },
  { title: 'OnsenUI' },
  { title: 'React Virtualized' },
  { title: 'Blueprint' },
  { title: 'React Desktop' },
  { title: 'Requests' },
  { title: 'Simplejson' },
  { title: 'SQL Alchemy' },
  { title: 'TensorFlow' },
  { title: 'Scrapy' },
  { title: 'Matplotlib' },
  { title: 'Scikit-Learn' },
  { title: 'Pygame' },
  { title: 'Arrow' },
  { title: 'wxPython' },
  { title: 'Github' },
  { title: 'Code Igniter' },
  { title: 'Yii2' },
  { title: 'Zend' },
  { title: 'CakePHP' },
  { title: 'FuelPHP' },
  { title: 'Directual' },
  { title: '.NET Framework' },
  { title: 'Drupal CMF' },
  { title: 'Prototype' },
  { title: 'MooTools' },
  { title: 'Underscore.js' },
  { title: 'Sass' },
  { title: 'Scss' },
  { title: 'Fontsquirrel' },
  { title: 'Colorzilla' },
  { title: 'Sprite' },
  { title: 'PhpStorm' },
  { title: 'gulp' },
  { title: 'Prettier' },
  { title: 'Figma' },
  { title: 'Optimizilla' },
  { title: 'Clip path' },
  { title: 'Favicon generator' },
  { title: 'json editor online' },
  { title: 'js fiddle' },
  { title: 'pug' },
  { title: 'VirtualBox' },
  { title: 'jQuery FancyBox' },
  { title: 'Device' },
  { title: 'Snap svg' },
  { title: 'GSAP.js' },
  { title: 'jQuery Form Styler' },
  { title: 'JQuery UI' },
  { title: 'Barba.js' },
  { title: 'JQuery scroll bar' },
  { title: 'Notepad ++' },
  { title: 'Visual Studio Code' },
  { title: 'Webshorm' },
  { title: 'Vim' },
  { title: 'Eclipse' },
  { title: 'Atom' },
  { title: 'Adobe Dreamweaver CC' },
  { title: 'SVN' },
  { title: 'Mercurial' },
  { title: 'Bazaar' },
  { title: 'TFS' },
  { title: 'CVS' },
  { title: 'th Dimension/4D' },
  { title: 'ABAP' },
  { title: 'ABC' },
  { title: 'ActionScript' },
  { title: 'Ada' },
  { title: 'Agilent VEE' },
  { title: 'Algol' },
  { title: 'Alice' },
  { title: 'Angelscript' },
  { title: 'Apex' },
  { title: 'APL' },
  { title: 'AppleScript' },
  { title: 'Arc' },
  { title: 'Arduino' },
  { title: 'ASP' },
  { title: 'AspectJ' },
  { title: 'Assembly' },
  { title: 'ATLAS' },
  { title: 'Augeas' },
  { title: 'AutoHotkey' },
  { title: 'AutoIt' },
  { title: 'AutoLISP' },
  { title: 'Automator' },
  { title: 'Avenue' },
  { title: 'Awk' },
  { title: 'Bash' },
  { title: '(Visual) Basic' },
  { title: 'bc' },
  { title: 'BCPL' },
  { title: 'BETA' },
  { title: 'BlitzMax' },
  { title: 'Boo' },
  { title: 'Bourne Shell' },
  { title: 'Bro' },
  { title: 'C' },
  { title: 'C Shell' },
  { title: 'C#' },
  { title: 'C++' },
  { title: 'C++/CLI' },
  { title: 'C-Omega' },
  { title: 'Caml' },
  { title: 'Ceylon' },
  { title: 'CFML' },
  { title: 'cg' },
  { title: 'Ch' },
  { title: 'CHILL' },
  { title: 'CIL' },
  { title: 'CL (OS/400)' },
  { title: 'Clarion' },
  { title: 'Clean' },
  { title: 'Clipper' },
  { title: 'Clojure' },
  { title: 'CLU' },
  { title: 'COBOL' },
  { title: 'Cobra' },
  { title: 'CoffeeScript' },
  { title: 'ColdFusion' },
  { title: 'COMAL' },
  { title: 'Common Lisp' },
  { title: 'Coq' },
  { title: 'cT' },
  { title: 'Curl' },
  { title: 'D' },
  { title: 'Dart' },
  { title: 'DCL' },
  { title: 'DCPU-16 ASM' },
  { title: 'Delphi/Object Pascal' },
  { title: 'DiBOL' },
  { title: 'Dylan' },
  { title: 'E' },
  { title: 'eC' },
  { title: 'Ecl' },
  { title: 'ECMAScript' },
  { title: 'EGL' },
  { title: 'Eiffel' },
  { title: 'Elixir' },
  { title: 'Emacs Lisp' },
  { title: 'Erlang' },
  { title: 'Etoys' },
  { title: 'Euphoria' },
  { title: 'EXEC' },
  { title: 'F#' },
  { title: 'Factor' },
  { title: 'Falcon' },
  { title: 'Fancy' },
  { title: 'Fantom' },
  { title: 'Felix' },
  { title: 'Forth' },
  { title: 'Fortran' },
  { title: 'Fortress' },
  { title: '(Visual) FoxPro' },
  { title: 'Gambas' },
  { title: 'GNU Octave' },
  { title: 'Go' },
  { title: 'Google AppsScript' },
  { title: 'Gosu' },
  { title: 'Groovy' },
  { title: 'Haskell' },
  { title: 'haXe' },
  { title: 'Heron' },
  { title: 'HPL' },
  { title: 'HyperTalk' },
  { title: 'Icon' },
  { title: 'IDL' },
  { title: 'Inform' },
  { title: 'Informix-4GL' },
  { title: 'INTERCAL' },
  { title: 'Io' },
  { title: 'Ioke' },
  { title: 'J' },
  { title: 'J#' },
  { title: 'JADE' },
  { title: 'Java' },
  { title: 'Java FX Script' },
  { title: 'JavaScript' },
  { title: 'JScript' },
  { title: 'JScript.NET' },
  { title: 'Julia' },
  { title: 'Korn Shell' },
  { title: 'Kotlin' },
  { title: 'LabVIEW' },
  { title: 'Ladder Logic' },
  { title: 'Lasso' },
  { title: 'Limbo' },
  { title: 'Lingo' },
  { title: 'Lisp' },
  { title: 'Logo' },
  { title: 'Logtalk' },
  { title: 'LotusScript' },
  { title: 'LPC' },
  { title: 'Lua' },
  { title: 'Lustre' },
  { title: 'M4' },
  { title: 'MAD' },
  { title: 'Magic' },
  { title: 'Magik' },
  { title: 'Malbolge' },
  { title: 'MANTIS' },
  { title: 'Maple' },
  { title: 'Mathematica' },
  { title: 'MATLAB' },
  { title: 'Max/MSP' },
  { title: 'MAXScript' },
  { title: 'MEL' },
  { title: 'Mercury' },
  { title: 'Mirah' },
  { title: 'Miva' },
  { title: 'ML' },
  { title: 'Monkey' },
  { title: 'Modula-2' },
  { title: 'Modula-3' },
  { title: 'MOO' },
  { title: 'Moto' },
  { title: 'MS-DOS Batch' },
  { title: 'MUMPS' },
  { title: 'NATURAL' },
  { title: 'Nemerle' },
  { title: 'Nimrod' },
  { title: 'NQC' },
  { title: 'NSIS' },
  { title: 'Nu' },
  { title: 'NXT-G' },
  { title: 'Oberon' },
  { title: 'Object Rexx' },
  { title: 'Objective-C' },
  { title: 'Objective-J' },
  { title: 'OCaml' },
  { title: 'Occam' },
  { title: 'ooc' },
  { title: 'Opa' },
  { title: 'OpenCL' },
  { title: 'OpenEdge ABL' },
  { title: 'OPL' },
  { title: 'Oz' },
  { title: 'Paradox' },
  { title: 'Parrot' },
  { title: 'Pascal' },
  { title: 'Perl' },
  { title: 'PHP' },
  { title: 'Pike' },
  { title: 'PILOT' },
  { title: 'PL/I' },
  { title: 'PL/SQL' },
  { title: 'Pliant' },
  { title: 'PostScript' },
  { title: 'POV-Ray' },
  { title: 'PowerBasic' },
  { title: 'PowerScript' },
  { title: 'PowerShell' },
  { title: 'Processing' },
  { title: 'Prolog' },
  { title: 'Puppet' },
  { title: 'Pure Data' },
  { title: 'Python' },
  { title: 'Q' },
  { title: 'R' },
  { title: 'Racket' },
  { title: 'REALBasic' },
  { title: 'REBOL' },
  { title: 'Revolution' },
  { title: 'REXX' },
  { title: 'RPG (OS/400)' },
  { title: 'Ruby' },
  { title: 'Rust' },
  { title: 'S' },
  { title: 'S-PLUS' },
  { title: 'SAS' },
  { title: 'Sather' },
  { title: 'Scala' },
  { title: 'Scheme' },
  { title: 'Scilab' },
  { title: 'Scratch' },
  { title: 'sed' },
  { title: 'Seed7' },
  { title: 'Self' },
  { title: 'Shell' },
  { title: 'SIGNAL' },
  { title: 'Simula' },
  { title: 'Simulink' },
  { title: 'Slate' },
  { title: 'Smalltalk' },
  { title: 'Smarty' },
  { title: 'SPARK' },
  { title: 'SPSS' },
  { title: 'SQR' },
  { title: 'Squeak' },
  { title: 'Squirrel' },
  { title: 'Standard ML' },
  { title: 'Suneido' },
  { title: 'SuperCollider' },
  { title: 'TACL' },
  { title: 'Tcl' },
  { title: 'Tex' },
  { title: 'thinBasic' },
  { title: 'TOM' },
  { title: 'Transact-SQL' },
  { title: 'Turing' },
  { title: 'TypeScript' },
  { title: 'Vala/Genie' },
  { title: 'VBScript' },
  { title: 'Verilog' },
  { title: 'VHDL' },
  { title: 'VimL' },
  { title: 'Visual Basic .NET' },
  { title: 'WebDNA' },
  { title: 'Whitespace' },
  { title: 'X10' },
  { title: 'xBase' },
  { title: 'XBase++' },
  { title: 'Xen' },
  { title: 'XPL' },
  { title: 'XSLT' },
  { title: 'XQuery' },
  { title: 'yacc' },
  { title: 'Yorick' },
  { title: 'Z shell' },
  { title: 'Html' },
  { title: 'CSS' },
  { title: 'Redux' },
  { title: 'Oracle' },
  { title: 'MySQL' },
  { title: 'Microsoft SQL Server' },
  { title: 'PostgreSQL' },
  { title: 'MongoDB' },
  { title: 'DB2' },
  { title: 'Cassandra' },
  { title: 'Microsoft Access' },
  { title: 'Redis' },
  { title: 'SQLite' },
  { title: 'Socket.IO' },
  { title: 'OrientDB' },
  { title: 'MariaDB' },
  { title: 'CouchDB' },
  { title: 'DynamoDB' },
  { title: 'Neo4j' },
  { title: 'Firebirdsql' },
  { title: 'Vanilla JS' },
  { title: 'Nginx' },
  { title: 'Webpack' },
  { title: 'Grunt' },
  { title: 'Brunch' },
  { title: 'Yeoman' },
  { title: 'Assemble' },
  { title: 'Broccoli' },
  { title: 'Feri' },
  { title: 'Lineman' },
  { title: 'Mimosa' },
  { title: 'Angus' },
  { title: 'Yoga' },

];



const AboutHardSkills = () => {


  const classes = useStyles();
  const classes2 = useStyles2();
 

  const dispatch = useDispatch()

  const { frontend, backend, dbs, other } = useSelector(state => state.aboutHardSkillsReducer)

  const {frontendTech, backendTech, dbsTech, otherTech, techList} = useSelector(state => state.addTechnologyReducer)

  console.log(frontendTech, 'frontendTech')
  console.log(techList, 'techlist')

  const addTech= (e, technology) => {
    e.preventDefault()
    console.log(technology, 'technology')
    dispatch(allTechnologyActions.addTechnologyAction(technology, techList, top100Films))
  }

  let showFrontendButton = !frontendTech
  let showBackendButton = !backendTech
  let showDbsButton = !dbsTech
  let showOtherButton = !otherTech

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
                    options={top100Films.concat(techList)}
                    getOptionLabel={(option) => option.title}
                    onChange={(_, values) =>
                      dispatch(allHardSkillsActions.setFrontendAction(values))
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
                    options={top100Films.concat(techList)}
                    getOptionLabel={option => option.title}
                    onChange={(_, values) => dispatch(allHardSkillsActions.setBackendAction(values))}
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
                    options={top100Films.concat(techList)}
                    getOptionLabel={option => option.title}
                    onChange={(_, values) => dispatch(allHardSkillsActions.setDbsAction(values))}
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
                    options={top100Films.concat(techList)}
                    getOptionLabel={option => option.title}
                    onChange={(_, values) => dispatch(allHardSkillsActions.setOtherAction(values))}
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

