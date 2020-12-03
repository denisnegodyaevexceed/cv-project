import './App.css';
import Template1 from './components/Template1.jsx';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CenteredGrid from './templatePage';
import CustomizedSteppers from './main'
import Portfolio from './components/inputs/portfolio';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
      <Switch>

      <Route path="/templates" component={CenteredGrid} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/" component={CustomizedSteppers} />


      </Switch>
        
    </div>
    </BrowserRouter>
  );
}

export default App;
