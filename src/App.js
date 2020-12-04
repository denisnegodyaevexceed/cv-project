import './App.css';
import Template1 from './components/Template1.jsx';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import templatePage from './templatePage';
import CustomizedSteppers from './main'
import Test from './1';
import { CSSTransition } from 'react-transition-group';

function App() {


  const routes = [
    { path: '/', Component: Test },
    { path: '/templates', Component: templatePage },


    { path: '/steps', Component: CustomizedSteppers },
    { path: '/resume', Component: Template1 },


    



  ]
  return (
    <BrowserRouter>
  
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
