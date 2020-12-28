import "./App.css";
import Template1 from "./components/Template1.jsx";
import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import templatePage from "./templatePage";
import Test from "./1";
import './components/grid.scss'
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import Template3 from "./components/Template3";
import Template2 from "./components/Template2";
import Template4 from "./components/Template4";
import Template5 from "./components/Template5";
import Drag from "./components/inputs/Drag";
import { 
  FirebaseDatabaseProvider,
} from "@react-firebase/database";
import firebase from 'firebase';
import '@firebase/storage';



function App() {
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

      default:
        return templatePage;
    }
  };
  
  const routes = [
    { path: "/", Component: Test },
    { path: "/templates", Component: templatePage },
   
    {path:'/resume', Component:correctTemplate(templateNumber)},
    {path:"/resumeLoad/:uid", Component:Drag},
    // { path: '/test', Component: Test },
  ];

  const firebaseConfig = {
    apiKey: "AIzaSyDp6Mq2-Vim1vNU9pX3tcAY61NVE_9yqws",
    authDomain: "portfolio-f27a6.firebaseapp.com",
    databaseURL: "https://portfolio-f27a6-default-rtdb.firebaseio.com",
    projectId: "portfolio-f27a6",
    storageBucket: "portfolio-f27a6.appspot.com",
    messagingSenderId: "377003541624",
    appId: "1:377003541624:web:9b7ac0cb085d26468e998d",
    measurementId: "G-2L5V383TM9"
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