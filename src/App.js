import "./App.css";
import Template1 from "./components/templates/template1/Template1";
import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import templatePage from "./components/chooseTemplates/TemplatePage";
import MainPage from "./components/MainPage";
import { CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import Template3 from "./components/templates/template3/Template3";
import Template2 from "./components/templates/template2/Template2";
import Template4 from "./components/templates/template4/Template4";
import Template5 from "./components/templates/template5/Template5";
import Drag from "./components/customTemplate/Drag";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import firebase from "firebase";
import "@firebase/storage";
import Template6 from "./components/templates/template6/Template6";
import Template7 from "./components/templates/template7/Template7";
import allTemplateActions from "./actions/templateActions";

function App() {
  const dispatch = useDispatch();
  const { templateNumber } = useSelector((state) => state.templateReducer);
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
      case "7":
        return Template7;
      case "8":
        return Template6;

      default:
        return templatePage;
    }
  };

  const body = document.querySelector("body");


  const check = localStorage.getItem("checkedA") === "true" ? true : false;

  useEffect(() => {
    if (check) {
      dispatch(allTemplateActions.setThemeDark());
      body.style.background =
        "linear-gradient(45deg, rgb(0, 0, 0) 55%, rgb(247, 77, 51) 5%) no-repeat fixed";
    } else {
      dispatch(allTemplateActions.setThemeLight());
      body.style.background =
        "linear-gradient(45deg, rgb(157, 120, 210), rgb(86, 181, 184)) no-repeat fixed";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [check]);

  const routes = [
    { path: "/", Component: MainPage },
    { path: "/templates", Component: templatePage },
    { path: "/resume", Component: correctTemplate(templateNumber) },
    { path: "/resumeLoad/:uid", Component: Drag },
  ];

  const firebaseConfig = {
    apiKey: "AIzaSyDp6Mq2-Vim1vNU9pX3tcAY61NVE_9yqws",
    authDomain: "portfolio-f27a6.firebaseapp.com",
    databaseURL: "https://portfolio-f27a6-default-rtdb.firebaseio.com",
    projectId: "portfolio-f27a6",
    storageBucket: "portfolio-f27a6.appspot.com",
    messagingSenderId: "377003541624",
    appId: "1:377003541624:web:9b7ac0cb085d26468e998d",
    measurementId: "G-2L5V383TM9",
  };

  return (
    <BrowserRouter>
      <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}>
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
      </FirebaseDatabaseProvider>
    </BrowserRouter>
  );
}

export default App;
