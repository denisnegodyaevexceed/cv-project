import './App.css';
import Template1 from './components/Template1.jsx';
import { BrowserRouter, Route,Switch} from "react-router-dom";
import templatePage from './templatePage';
import CustomizedSteppers from './main'
import Test from './1';
import { CSSTransition } from 'react-transition-group';
import {useSelector} from 'react-redux'

function App() {
  const {templateNumber} = useSelector(state => state.templateReducer)


  const routes = [
    { path: '/', Component: Test },
    { path: '/templates', Component: templatePage },


    { path: '/steps', Component: CustomizedSteppers },
    
    // { path: '/resume', Component: Template1 }, 

]

const correctTemplate = (templateNumber) => {
  console.log("===================>",  templateNumber )

  switch(templateNumber){
      case '1':
          return  Template1
            
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
