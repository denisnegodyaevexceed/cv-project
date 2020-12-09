import React from 'react'
import TextField from '@material-ui/core/TextField';
import allHardSkillsActions from '../../actions/aboutHardSkillsActions';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
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
      {title:'th Dimension/4D'},
{title:'ABAP'},
{title:'ABC'},
{title:'ActionScript'},
{title:'Ada'},
{title:'Agilent VEE'},
{title:'Algol'},
{title:'Alice'},
{title:'Angelscript'},
{title:'Apex'},
{title:'APL'},
{title:'AppleScript'},
{title:'Arc'},
{title:'Arduino'},
{title:'ASP'},
{title:'AspectJ'},
{title:'Assembly'},
{title:'ATLAS'},
{title:'Augeas'},
{title:'AutoHotkey'},
{title:'AutoIt'},
{title:'AutoLISP'},
{title:'Automator'},
{title:'Avenue'},
{title:'Awk'},
{title:'Bash'},
{title:'(Visual) Basic'},
{title:'bc'},
{title:'BCPL'},
{title:'BETA'},
{title:'BlitzMax'},
{title:'Boo'},
{title:'Bourne Shell'},
{title:'Bro'},
{title:'C'},
{title:'C Shell'},
{title:'C#'},
{title:'C++'},
{title:'C++/CLI'},
{title:'C-Omega'},
{title:'Caml'},
{title:'Ceylon'},
{title:'CFML'},
{title:'cg'},
{title:'Ch'},
{title:'CHILL'},
{title:'CIL'},
{title:'CL (OS/400)'},
{title:'Clarion'},
{title:'Clean'},
{title:'Clipper'},
{title:'Clojure'},
{title:'CLU'},
{title:'COBOL'},
{title:'Cobra'},
{title:'CoffeeScript'},
{title:'ColdFusion'},
{title:'COMAL'},
{title:'Common Lisp'},
{title:'Coq'},
{title:'cT'},
{title:'Curl'},
{title:'D'},
{title:'Dart'},
{title:'DCL'},
{title:'DCPU-16 ASM'},
{title:'Delphi/Object Pascal'},
{title:'DiBOL'},
{title:'Dylan'},
{title:'E'},
{title:'eC'},
{title:'Ecl'},
{title:'ECMAScript'},
{title:'EGL'},
{title:'Eiffel'},
{title:'Elixir'},
{title:'Emacs Lisp'},
{title:'Erlang'},
{title:'Etoys'},
{title:'Euphoria'},
{title:'EXEC'},
{title:'F#'},
{title:'Factor'},
{title:'Falcon'},
{title:'Fancy'},
{title:'Fantom'},
{title:'Felix'},
{title:'Forth'},
{title:'Fortran'},
{title:'Fortress'},
{title:'(Visual) FoxPro'},
{title:'Gambas'},
{title:'GNU Octave'},
{title:'Go'},
{title:'Google AppsScript'},
{title:'Gosu'},
{title:'Groovy'},
{title:'Haskell'},
{title:'haXe'},
{title:'Heron'},
{title:'HPL'},
{title:'HyperTalk'},
{title:'Icon'},
{title:'IDL'},
{title:'Inform'},
{title:'Informix-4GL'},
{title:'INTERCAL'},
{title:'Io'},
{title:'Ioke'},
{title:'J'},
{title:'J#'},
{title:'JADE'},
{title:'Java'},
{title:'Java FX Script'},
{title:'JavaScript'},
{title:'JScript'},
{title:'JScript.NET'},
{title:'Julia'},
{title:'Korn Shell'},
{title:'Kotlin'},
{title:'LabVIEW'},
{title:'Ladder Logic'},
{title:'Lasso'},
{title:'Limbo'},
{title:'Lingo'},
{title:'Lisp'},
{title:'Logo'},
{title:'Logtalk'},
{title:'LotusScript'},
{title:'LPC'},
{title:'Lua'},
{title:'Lustre'},
{title:'M4'},
{title:'MAD'},
{title:'Magic'},
{title:'Magik'},
{title:'Malbolge'},
{title:'MANTIS'},
{title:'Maple'},
{title:'Mathematica'},
{title:'MATLAB'},
{title:'Max/MSP'},
{title:'MAXScript'},
{title:'MEL'},
{title:'Mercury'},
{title:'Mirah'},
{title:'Miva'},
{title:'ML'},
{title:'Monkey'},
{title:'Modula-2'},
{title:'Modula-3'},
{title:'MOO'},
{title:'Moto'},
{title:'MS-DOS Batch'},
{title:'MUMPS'},
{title:'NATURAL'},
{title:'Nemerle'},
{title:'Nimrod'},
{title:'NQC'},
{title:'NSIS'},
{title:'Nu'},
{title:'NXT-G'},
{title:'Oberon'},
{title:'Object Rexx'},
{title:'Objective-C'},
{title:'Objective-J'},
{title:'OCaml'},
{title:'Occam'},
{title:'ooc'},
{title:'Opa'},
{title:'OpenCL'},
{title:'OpenEdge ABL'},
{title:'OPL'},
{title:'Oz'},
{title:'Paradox'},
{title:'Parrot'},
{title:'Pascal'},
{title:'Perl'},
{title:'PHP'},
{title:'Pike'},
{title:'PILOT'},
{title:'PL/I'},
{title:'PL/SQL'},
{title:'Pliant'},
{title:'PostScript'},
{title:'POV-Ray'},
{title:'PowerBasic'},
{title:'PowerScript'},
{title:'PowerShell'},
{title:'Processing'},
{title:'Prolog'},
{title:'Puppet'},
{title:'Pure Data'},
{title:'Python'},
{title:'Q'},
{title:'R'},
{title:'Racket'},
{title:'REALBasic'},
{title:'REBOL'},
{title:'Revolution'},
{title:'REXX'},
{title:'RPG (OS/400)'},
{title:'Ruby'},
{title:'Rust'},
{title:'S'},
{title:'S-PLUS'},
{title:'SAS'},
{title:'Sather'},
{title:'Scala'},
{title:'Scheme'},
{title:'Scilab'},
{title:'Scratch'},
{title:'sed'},
{title:'Seed7'},
{title:'Self'},
{title:'Shell'},
{title:'SIGNAL'},
{title:'Simula'},
{title:'Simulink'},
{title:'Slate'},
{title:'Smalltalk'},
{title:'Smarty'},
{title:'SPARK'},
{title:'SPSS'},
{title:'SQR'},
{title:'Squeak'},
{title:'Squirrel'},
{title:'Standard ML'},
{title:'Suneido'},
{title:'SuperCollider'},
{title:'TACL'},
{title:'Tcl'},
{title:'Tex'},
{title:'thinBasic'},
{title:'TOM'},
{title:'Transact-SQL'},
{title:'Turing'},
{title:'TypeScript'},
{title:'Vala/Genie'},
{title:'VBScript'},
{title:'Verilog'},
{title:'VHDL'},
{title:'VimL'},
{title:'Visual Basic .NET'},
{title:'WebDNA'},
{title:'Whitespace'},
{title:'X10'},
{title:'xBase'},
{title:'XBase++'},
{title:'Xen'},
{title:'XPL'},
{title:'XSLT'},
{title:'XQuery'},
{title:'yacc'},
{title:'Yorick'},
{title:'Z shell'},
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

