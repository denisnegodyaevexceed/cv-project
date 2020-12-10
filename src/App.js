import './App.css';
import Template1 from './components/Template1.jsx';
import { BrowserRouter, Route,Switch} from "react-router-dom";
import templatePage from './templatePage';
import CustomizedSteppers from './main'
import Test from './1';
import { CSSTransition } from 'react-transition-group';
import {useSelector} from 'react-redux'
import Template3 from './components/Template3';
import Template2 from './components/Template2';
// import CustomizedHook from './test1';



function App() {
  const {templateNumber} = useSelector(state => state.templateReducer)


  const routes = [
    { path: '/', Component: Test },
    { path: '/templates', Component: templatePage },
    {path: '/template3', Component: Template3},


    { path: '/steps', Component: CustomizedSteppers },
    // { path: '/template2', Component: Template2 },

    // { path: '/test', Component: CustomizedHook },

    // { path: '/resume', Component: Template1 }, 

]

const correctTemplate = (templateNumber) => {
  console.log("===================>",  templateNumber )

  switch(templateNumber){
      case '1':
          return  Template1
          case '2':
          return  Template2
            
      default:
          return templatePage    
  }
}


  return (
    <BrowserRouter>
  <Switch>
  <Route path="/resume" component={correctTemplate(templateNumber)} />
  </Switch>
    <div className="App">
    {routes.map(({ path, Component }) =>
        <Route key={path} exact path={path}>
          {({ match }) =>
            <CSSTransition
              timeout={1000}
              classNames="page"
              unmountOnExit
              in={match !== null}
            >
              <Component />
            </CSSTransition>
          }

        </Route>
      )}
    </div>
     

    </BrowserRouter>
  );
}

export default App;
