import './App.css';
import Template1 from './components/Template1.jsx';
import AboutMe from './components/inputs/aboutMe'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutWorkHistory from './components/inputs/aboutWorkHistory';
import AboutHardSkills from './components/inputs/aboutHardSkills'
import templatePage from './templatePage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
      <Switch>
      <Route path="/templates" component={templatePage} />
      <Route path="/portfolio" component={Template1} />
      <Route path="/aboutwork" component={AboutWorkHistory} />
      <Route path="/abouthardskills" component={AboutHardSkills}/>
      <Route path="/" component={AboutMe} />

      </Switch>
        
    </div>
    </BrowserRouter>
  );
}

export default App;
