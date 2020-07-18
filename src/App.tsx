import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Skills } from "./Pages/Skills";
import { Intro } from "./Pages/Intro";

function App() {
  return (
    <div className="App">
      <Intro></Intro>
      <Skills></Skills>
    </div>
  );
}


export default App;
