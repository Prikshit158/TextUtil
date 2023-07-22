import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';

function App() {
  const [mode, setmode] = useState("light")
  const [alert, setalert] = useState(null)
  const showAlert = (message, type)=>{
    setalert({
      msg : message,
      type : type
    })
  }
  const toggleMode = () =>{
    if(mode === 'dark')
    {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is now enabled", "success");
      setTimeout(() => {
        setalert(null);
      }, 1500);
    }
    else{
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode is now enabled", "success");
      setTimeout(() => {
        setalert(null);
      }, 1500);
    }
  }
  return (
    <>
    <Navbar title = "TextUtils" mode = {mode} togglemode = {toggleMode}/>
    <Alert alert = {alert}/>
    <Form heading = "Input" mode = {mode} />
    
    </>
  );
}

export default App;
