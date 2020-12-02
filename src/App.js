import './App.css';
import React from 'react'
import Template2 from './components/Template2/Template2'
import Template1 from './components/Template1';
import Pdf from 'react-to-pdf'


const ref = React.createRef()

function App() {
  return (
    <div className="App">
      <Pdf targetRef={ref} filename='file.pdf'>
        {({toPdf}) => <button onClick={toPdf}>download</button>}
        </Pdf>
      <div className='container'ref={ref}>
      
        <Template2 />
        </div>
        
    </div>
  );
}

export default App;
