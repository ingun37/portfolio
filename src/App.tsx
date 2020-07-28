import React, { useState } from 'react';
import { createStyles, makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import ReactFullpage, { fullpageApi } from '@fullpage/react-fullpage';
import { Intro } from "./Pages/Intro";
import { GameProjects } from "./Pages/GameProjects";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SouthKorea from './south-korea.svg';
import Usa from './usa.svg';
import { Template, TemplateProps } from './components/Template';
import { AppProjects } from "./Pages/AppProjects";
import { GraphicsProjects } from './Pages/GraphicsProjects';
import { MathProjects } from "./Pages/MathProjects";
import MathAreas from './Pages/MathAreas';
import * as _ from "lodash";
import { page$ } from './global/State';
import globalTheme from './global/GlobalTheme';
import FullStack from './Pages/FullStack';
import Writings from './Pages/Writings';
import FunctionalMath from './Pages/FunctionalMath';
import MySvgIcon from './components/MySvgIcon';
import FunctionalProgramming from './Pages/FunctionalProgramming';
import ContinuousIntegration from './Pages/ContinuousIntegration';
import { useMediaQuery, useTheme, List, ListItem, ListItemText, Drawer } from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import { Subject, BehaviorSubject } from 'rxjs';

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
    bar: {
      width: 200,
      borderRadius: '0px 0px 0px 32px'
    }
  }),
);

var globalFullPageAPI:fullpageApi | null = null

function App() {

  const [drawerState, setDrawerState] = useState(false);
  const classes = useLocalStyles();
  return (
    <ThemeProvider theme={globalTheme}>

      <div className={classes.root}>
        <AppBar position="absolute" className={classes.bar}>
          <Toolbar>

            <Typography variant="h6" className={classes.title}>

            </Typography>
            <IconButton>
              <MySvgIcon src={Usa} />
            </IconButton>
            <IconButton>
              <MySvgIcon src={SouthKorea} />
            </IconButton>
            <IconButton onClick={() => setDrawerState(true)}>
              <Menu />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer anchor='right' open={drawerState} onClose={() => setDrawerState(false)}>
          <List>
            {
              pageTitles.map((x,idx) => {
                return (
                  <ListItem button key={x} onClick={()=>globalFullPageAPI?.moveTo(idx+1)}>
                    <ListItemText primary={x} />
                  </ListItem>
                )
              })
            }

          </List>
        </Drawer>
        <MyFullPage />
      </div>
    </ ThemeProvider>
  );
}

const pageTitles = [
  "Hi I'm Ingun",
  "GAME DEVELOPER",
  "APPLICATION DEVELOPER",
  "FULLSTACK DEVELOPER",
  "CI DEVELOPER",
  "FUNCTIONAL PROGRAMMER",
  "MATHEMATICS ENTHUSIAST",
  "WRITER"
]

function MyFullPage() {
  const pageSubs: [string, React.ReactElement][][] = [
    [
      ["Get to know me as a", Intro()]
    ],
    [
      ["I've successfully developed & maintained commercially successful games.", GameProjects()],
      ["I'm very knowledgeable about computer graphics", GraphicsProjects()]
    ],
    [
      ["I've successfully developed & maintained applications including the official application for one of the biggest radio channel in South Korea", AppProjects()]
    ],
    [
      ["I have experiences with various platforms/libraries", FullStack()]
    ],
    [
      ["Bag of related skills & Experience of automating the build pipeline for Crusaders Quest", ContinuousIntegration()]
    ],
    [
      ["I can utilize following functional paradigms in programming", FunctionalProgramming()],
      ["I have solid understanding of applications of category theory in programming languages. I can utilize following mathematical concepts in programming", FunctionalMath()]
    ],
    [
      ["I'm interested in various areas of mathematics", MathAreas()],
      ["... and their applications in programmings", MathProjects()],
    ],
    [
      ["I've written articles on iOS, functional programming and mathematics", Writings()],
    ]
  ]
  const pages: TemplateProps[] = pageTitles.map((title, i) => {
    return {
      title,
      subs: pageSubs[i],
      verticalPage: i
    }
  })


  return (
    <ReactFullpage
      //fullpage options
      licenseKey={'YOUR_KEY_HERE'}
      scrollingSpeed={1000} /* Options here */
      afterLoad={(origin, dest) => {
        const pageNumber: [number, number] = [dest.index, 0]
        page$.next(pageNumber)
      }}
      autoScrolling={true}

      render={({ state, fullpageApi }) => {
        globalFullPageAPI = fullpageApi;

        return (
          <ReactFullpage.Wrapper>
            {pages.map(x => {
              return (
                <div className="section">
                  <Template {...x}></Template>
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
