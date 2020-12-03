import './App.css';
import Template1 from './components/Template1.jsx';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import templatePage from './templatePage';
import CustomizedSteppers from './main'
import Portfolio from './components/inputs/portfolio';
import Test from './1';

function App() {
  return (
    <BrowserRouter>

    <div className="App">
      <Switch>
      <Route exact path="/" component={Test} />

      <Route path="/templates" component={templatePage} />
      <Route path="/resume" component={Template1} />
      <Route path="/steps" component={CustomizedSteppers} />


     

      


      </Switch>
        
    </div>
    </BrowserRouter>
  );
}

export default App;
