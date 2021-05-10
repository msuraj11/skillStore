import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import SkillStore from './components/SkillStore';
import Alert from './components/Alert';
import PageNotFound from './components/PageNotFound';
import SkillDetails from './components/SkillDetails';

function App() {
  const [alertState, setAlert] = useState({
    msg: '',
    alertType: ''
  });

  const [usersList, setUsers] = useState([
    {
      username: "suraj",
      email: "suraj.mamidi@gmail.com",
      mobileNumber: "9652429277",
      password: "123456"
    }
  ]);

  const [skillData, setSkill] = useState({});

  const updateAlert = (msg, type) => {
    setAlert({msg: msg, alertType: type});
  };

  const updateUsers = (formData) => {
    setUsers([...usersList, formData]);
  };

  const updateSkill = skill => {
    setSkill({...skill});
  }

  const openWindow = type => {
    const URL = type === 'gmail' ? "https://accounts.google.com" : "https://www.facebook.com/";
    window.open(URL, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
  };

  const {msg, alertType} = alertState;

  return (
    <BrowserRouter>
      <Alert msg={msg} alertType={alertType} />
      <Switch>
        <Route exact path="/" render={props => <Login usersList={usersList} setAlert={updateAlert} openWindow={openWindow} {...props} />} />
        <Route exact path="/login" render={props => <Login usersList={usersList} setAlert={updateAlert} openWindow={openWindow} {...props} />} />
        <Route exact path="/signup" render={props => <Signup setUsers={updateUsers} setAlert={updateAlert} openWindow={openWindow} {...props} />} />
        <Route exact path="/skillstore/:user" render={props => <SkillStore setAlert={updateAlert} setSkill={updateSkill} {...props} />} />
        <Route exact path="/skill-details" render={props => <SkillDetails skill={skillData} {...props} />} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
