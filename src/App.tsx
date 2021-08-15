import React, { useState } from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  ThemeProvider,
} from "@material-ui/core/styles";
import "./App.css";
import ReactFullpage, { fullpageApi } from "@fullpage/react-fullpage";
import { Intro } from "./Pages/Intro";
import { GameProjects } from "./Pages/GameProjects";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SouthKorea from "./south-korea.svg";
import Usa from "./usa.svg";
import Github from "./icons/GitHub-Mark.svg";
import { Template, TemplateProps } from "./components/Template";
import { AppProjects } from "./Pages/AppProjects";
import { GraphicsProjects } from "./Pages/GraphicsProjects";
import { MathProjects } from "./Pages/MathProjects";
import MathAreas from "./Pages/MathAreas";
import { page$ } from "./global/State";
import globalTheme from "./global/GlobalTheme";
import FullStack from "./Pages/FullStack";
import Writings from "./Pages/Writings";
import FunctionalMath from "./Pages/FunctionalMath";
import { Contributions } from "./Pages/Contributions";

import MySvgIcon from "./components/MySvgIcon";
import FunctionalProgramming from "./Pages/FunctionalProgramming";
import ContinuousIntegration from "./Pages/ContinuousIntegration";
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Mail from "@material-ui/icons/Mail";

import Bilingual from "./Pages/Bilingual";
import ResumePdf from "./resume.pdf";
import Resume from "./Pages/Resume";

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
      width: 300,
      borderRadius: "0px 0px 0px 32px",
    },
    AppBarTextBtn: {
      fontFamily: "Anton",
      color: "white",
    },
  })
);

var globalFullPageAPI: fullpageApi | null = null;

enum Lang {
  KR,
  EN,
}

function App() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleResumeOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const isResumeOpen = Boolean(anchorEl);
  const handleResumeClose = () => {
    setAnchorEl(null);
  };
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isResumeOpen}
      onClose={handleResumeClose}
    >
      <MenuItem
        onClick={() => {
          window.open(ResumePdf);
          handleResumeClose();
        }}
      >
        resume.pdf
      </MenuItem>
    </Menu>
  );
  const [drawerState, setDrawerState] = useState(false);
  const classes = useLocalStyles();
  const [langState] = useState(Lang.EN);

  return (
    <ThemeProvider theme={globalTheme}>
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.bar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title} />

            <Button
              className={classes.AppBarTextBtn}
              onClick={handleResumeOpen}
            >
              RESUME
            </Button>
            <IconButton color="inherit" href="mailto:ingun37@gmail.com">
              <Mail />
            </IconButton>
            <IconButton
              onClick={() => window.open("https://github.com/ingun37")}
            >
              <MySvgIcon src={Github} />
            </IconButton>
            {langState == Lang.KR ? (
              <IconButton>
                <MySvgIcon src={Usa} />
              </IconButton>
            ) : (
              <IconButton>
                <MySvgIcon src={SouthKorea} />
              </IconButton>
            )}
            <IconButton color="inherit" onClick={() => setDrawerState(true)}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {renderMenu}
        <Drawer
          anchor="right"
          open={drawerState}
          onClose={() => setDrawerState(false)}
        >
          <List>
            {pageTitles.map((x, idx) => {
              return (
                <ListItem
                  button
                  key={x}
                  onClick={() => globalFullPageAPI?.moveTo(idx + 1)}
                >
                  <ListItemText primary={x} />
                </ListItem>
              );
            })}
          </List>
        </Drawer>
        <MyFullPage />
      </div>
    </ThemeProvider>
  );
}

const pageTitles = [
  "Hi I'm Ingun",
  "GAME DEVELOPER",
  "COMPUTER GRAPHICS",
  "APPLICATION DEVELOPER",
  "FULLSTACK DEVELOPER",
  "CI DEVELOPER",
  "FUNCTIONAL PROGRAMMER",
  "MATHEMATICS ENTHUSIAST",
  "WRITER",
  "OPENSOURCE CONTRIBUTIONS",
  "BILINGUAL",
  "RESUME",
];

function MyFullPage() {
  const pageSubs: [string, React.ReactElement][][] = [
    [["Get to know me as a", Intro()]],
    [
      [
        "I've successfully developed & maintained commercially successful games.",
        GameProjects(),
      ],
    ],
    [["I'm knowledgeable about computer graphics", GraphicsProjects()]],
    [
      [
        "I've successfully developed & maintained applications including the official application for one of the biggest radio channel in South Korea",
        AppProjects(),
      ],
    ],
    [["I have experiences with various platforms/libraries", FullStack()]],
    [
      [
        "Bag of related skills & Experience of automating the build pipeline for Crusaders Quest",
        ContinuousIntegration(),
      ],
    ],
    [
      [
        "I can utilize following functional paradigms in programming",
        FunctionalProgramming(),
      ],
      [
        "I have solid understanding of applications of category theory in programming languages. I can utilize following mathematical concepts in programming",
        FunctionalMath(),
      ],
    ],
    [
      ["I love applications of mathematics in programming", MathProjects()],
      ["I'm interested in various areas of mathematics", MathAreas()],
    ],
    [
      [
        "I've written articles on iOS, functional programming and mathematics",
        Writings(),
      ],
    ],
    [["I have contributed to these open-source projects", Contributions()]],
    [["Fluent Korean & English", Bilingual()]],
    [["Please consider checking out my resume", Resume()]],
  ];
  const pages: TemplateProps[] = pageTitles.map((title, i) => {
    return {
      title,
      subs: pageSubs[i],
      verticalPage: i,
    };
  });

  return (
    <ReactFullpage
      //fullpage options
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000} /* Options here */
      afterLoad={(origin, dest) => {
        const pageNumber: [number, number] = [dest.index, 0];
        page$.next(pageNumber);
      }}
      responsive={960}
      render={({ fullpageApi }) => {
        globalFullPageAPI = fullpageApi;

        return (
          <ReactFullpage.Wrapper>
            {pages.map((x) => {
              return (
                <div className="section" key={x.title}>
                  <Template {...x} />
                </div>
              );
            })}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

//Used recat-fullpage (https://github.com/alvarotrigo/react-fullpage)

export default App;
