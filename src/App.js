// import Test from './Components/Test';
import React, { useState } from 'react';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import About from './Components/About';


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=> {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2b3036';
      showAlert('Dark Mode has been enabled', 'success')
      //Just for experiment
      // setInterval(() => {
      //   document.title = 'TextUtil - :_:';
      // }, 1000);
      // setTimeout(()=> {
      //   setInterval(() => {
      //     document.title = 'TextUtil - -_-';
      //   }, 1000);
      // }, 500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled', 'success');
    }
  }

  return (
    <>
      {/* <Router>
        <Navbar title = "TextUtils" aboutText = 'About TextUtils' searchBar = {true} mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} mode={mode}/>
        <div className="container" style={{marginTop: '5rem'}}>
          <Routes> */}
            {/* using 'exact' keyword before path is a good practice because react does partial matching without 'exact' keyword. we
                might face problems if want to render any component whose path is "/users/profile". It may render a different component 
                which is related to a path "/users" */}

            {/* <Route exact path='/' element={<TextForm heading = 'Enter the text to analyze' mode={mode} showAlert={showAlert}/>} />
            <Route exact path="/about" element={<About  mode={mode}/>} />
            
          </Routes>
        </div>
      </Router> */}

      <Navbar title = "TextUtils" aboutText = 'About TextUtils' searchBar = {true} mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} mode={mode}/>
      <div className="container" style={{marginTop: '5rem'}}>
          <TextForm heading = 'Enter the text to analyze' mode={mode} showAlert={showAlert}/>
      </div>

      
      {/* <div className="container">
        <Test/>
      </div> */}
    </>
  );
}

export default App;
