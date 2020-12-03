import './App.css';
import Template1 from './components/Template1.jsx';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import templatePage from './templatePage';
import CustomizedSteppers from './main'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
      <Switch>

      <Route path="/templates" component={templatePage} />
      <Route path="/portfolio" component={Template1} />
      <Route path="/" component={CustomizedSteppers} />


      </Switch>
        
    </div>
    </BrowserRouter>
  );
}

export default App;
