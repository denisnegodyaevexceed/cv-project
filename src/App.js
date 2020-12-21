import "./App.css";
import Template1 from "./components/Template1.jsx";
import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import templatePage from "./templatePage";
import Test from "./1";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import Template3 from "./components/Template3";
import Template2 from "./components/Template2";
import Template4 from "./components/Template4";
import Template5 from "./components/Template5";
import Drag from "./components/inputs/Drag";



function App() {
  const { templateNumber } = useSelector((state) => state.templateReducer);

  const routes = [
    { path: "/", Component: Test },
    { path: "/templates", Component: templatePage },
    { path: '/test', Component: Test },
  ];

  const correctTemplate = (templateNumber) => {
    

    switch (templateNumber) {
      case "1":
        return Template1;
      case "2":
        return Template2;
      case "3":
        return Template3;
      case "4":
        return Template4;
      case "5":
        return Template5;
        case "6":
        return Drag;

      default:
        return templatePage;
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/resume" component={correctTemplate(templateNumber)} />
      </Switch>
      <div className="App">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                timeout={1000}
                classNames="page"
                unmountOnExit
                in={match !== null}
              >
                <Component />
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    </BrowserRouter>
  );
}

export default App;
