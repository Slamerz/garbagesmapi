import React from 'react';
import './App.css';
import {Header, Navigation, People} from "./components";
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
      <>
      <Header/>
      <Route path={'/people'}><People/></Route>
      </>
  );
}

export default App;
