import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import logo from './logo.svg';
import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';
import { Skills } from "./Pages/Skills";
import { Intro } from "./Pages/Intro";
import { Chronicle } from "./Pages/Chronicle";
import { Education } from "./Pages/Education";
import { GameExperience } from "./Pages/GameExperience";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from "@material-ui/core/SvgIcon";
import Button from '@material-ui/core/Button';
import {ReactComponent as SouthKorea} from './south-korea.svg';
import {ReactComponent as Usa} from './usa.svg';

const useLocalStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

function App() {
  const pages = [
    Intro(), GameExperience(), Skills(), Chronicle(), Education()
  ]
  const classes = useLocalStyles();
  return (
    <div className={classes.root}>
      <AppBar position="absolute">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <IconButton>
            <SvgIcon>
              <Usa/>
            </SvgIcon>
          </IconButton>
          <IconButton>
            <SvgIcon>
              <SouthKorea/>
            </SvgIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
      <ReactFullpage
        //fullpage options
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000} /* Options here */

        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              {pages.map(x => {
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
    </div>
  );
}

//Used recat-fullpage (https://github.com/alvarotrigo/react-fullpage)

export default App;
