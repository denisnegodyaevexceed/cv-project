import './App.css';
import Template1 from './components/Template1.jsx';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import templatePage from './templatePage';
import CustomizedSteppers from './main'
import Portfolio from './components/inputs/portfolio';
import Test from './1';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import { CSSTransition } from 'react-transition-group';

function App() {
  let a = window.location.toString();

  const routes =[
       
    {path:'/steps', Component:CustomizedSteppers},
    
]
  return (
    <BrowserRouter>
   

    <div className="App">
   
      <Switch>
        
      <Route exact path="/" component={Test} />
      <Route path="/templates" component={templatePage} />
      <Route path="/resume" component={Template1} />





     

      


      </Switch>
      
      
    </div>
    {routes.map(({path, Component})=>
            <Route key={path} exact path={path}>
                {({match})=>
                <CSSTransition
                timeout={1000}
                classNames="page"
                unmountOnExit
                in={match !== null}
                >
                    <Component/>
                </CSSTransition>
                }

            </Route>
            )}
             <div className="wrap" >
    <Box className="btn2" to="/steps" component={Link} >Create Resume</Box>
    {/* <Box to="/steps" component={Link} className="button1" >Create Resume</Box> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
