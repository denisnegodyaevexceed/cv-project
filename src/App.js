import './App.css';
import Template1 from './components/Template1.jsx';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import templatePage from './templatePage';
import CustomizedSteppers from './main'
import Test from './1';
import { CSSTransition } from 'react-transition-group';

function App() {


  const routes = [

    { path: '/steps', Component: CustomizedSteppers },

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

    </BrowserRouter>
  );
}

export default App;
