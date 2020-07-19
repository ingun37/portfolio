import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';
import { Skills } from "./Pages/Skills";
import { Intro } from "./Pages/Intro";
import { Chronicle } from "./Pages/Chronicle";
import { Education } from "./Pages/Education";

function App() {
  const pages = [
    Intro(), Skills(), Chronicle(), Education()
  ]
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={'YOUR_KEY_HERE'}
      scrollingSpeed={1000} /* Options here */

      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            {pages.map(x=>{
              return (
                <div className="section">
                  {x}
                </div>
              )
            })}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

//Used recat-fullpage (https://github.com/alvarotrigo/react-fullpage)

export default App;
