import './App.css';
import Template1 from './components/Template1.jsx';
import AboutMe from './components/inputs/aboutMe'
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
      <div className='container'>
      <Switch>
      <Route path="/portfolio" component={Template1} />
      <Route path="/" component={AboutMe} />
      </Switch>
        </div>
        
    </div>
    </BrowserRouter>
  );
}

export default App;
