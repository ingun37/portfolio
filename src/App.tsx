import React from 'react';
import { createStyles, makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import logo from './logo.svg';
import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';
import { Skills } from "./Pages/Skills";
import { Intro } from "./Pages/Intro";
import { Chronicle } from "./Pages/Chronicle";
import { Education } from "./Pages/Education";
import { GameProjects } from "./Pages/GameProjects";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from "@material-ui/core/SvgIcon";
import Button from '@material-ui/core/Button';
import SouthKorea from './south-korea.svg';
import Usa from './usa.svg';
import { Template, TemplateProps } from './Pages/Template';
import { AppProjects } from "./Pages/AppProjects";
import { GraphicsProjects } from './Pages/GraphicsProjects';
import { MathProjects } from "./Pages/MathProjects";
import MathAreas from './Pages/MathAreas';
import { Subject, Observable } from 'rxjs';
import { filter, map } from "rxjs/operators";
import * as _ from "lodash";
import { page$ } from './Pages/State';
import globalTheme from './Pages/GlobalTheme';
import FullStack from './Pages/FullStack';
import Writings from './Pages/Writings';
import Functional from './Pages/Functional';
import MySvgIcon from './Pages/components/MySvgIcon';

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
const pageTitles = [
  "Hi I'm Ingun",
  "AS A GAME DEVELOPER",
  "AS AN APPLICATION DEVELOPER",
  "AS A FULLSTACK DEVELOPER",
  "I'M A FUNCTIONAL PROGRAMMER",
  "AS A MATHEMATICS ENTHUSIAST",
  "AS A WRITER"
]
function App() {
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
      ["with solid understanding of application of category theory in programming languages. I can utilize following concepts in programming", Functional()]
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
          </Toolbar>
        </AppBar>
        <ReactFullpage
          //fullpage options
          licenseKey={'YOUR_KEY_HERE'}
          scrollingSpeed={1000} /* Options here */
          afterLoad={(origin, dest) => {
            const pageNumber: [number, number] = [dest.index, 0]
            page$.next(pageNumber)
          }}
          render={({ state, fullpageApi }) => {
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
      </div>
    </ ThemeProvider>
  );
}

//Used recat-fullpage (https://github.com/alvarotrigo/react-fullpage)

export default App;
