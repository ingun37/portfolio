import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Skills } from "./Pages/Skills";
import { Intro } from "./Pages/Intro";
import { Chronicle } from "./Pages/Chronicle";
import { Education } from "./Pages/Education";
import 'fontsource-roboto';

function App() {
  return (
    <div className="App">
      <Intro></Intro>
      <Skills></Skills>
      <Chronicle></Chronicle>
      <Education></Education>
    </div>
  );
}


export default App;
