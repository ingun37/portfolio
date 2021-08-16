import React from "react";
import cru from "../images/cru.jpg";
import eos from "../images/eos.jpg";
import contest from "../images/contest.jpeg";
import { ProjectCards, ProjectProp } from "../components/ProjectCards";
import { List, ListItem, ListItemText } from "@material-ui/core";
import closet from "../images/closet.jpg";

export function GameProjects() {
  const games: ProjectProp[] = [
    new ProjectProp(
      "CLO-SET",
      closet,
      "CLO Virtual Fashion",
      "2020~",
      "Typescript/WebGL",
      CLOSETDialogue,
      undefined
    ),
    new ProjectProp(
      "Crusaders Quest",
      cru,
      "LoadComplete/NHN Entertainment",
      "2015~2017",
      "Unity3D/C#",
      CrusadersDialogue
    ),
    new ProjectProp(
      "Echo of Soul",
      eos,
      "Nvius/Hangame",
      "2014~2015",
      "Unreal/C++/Scaleform",
      EOSDialogue
    ),

    new ProjectProp(
      "국림과천과학관 온라인과학게임대회",
      contest,
      "Swink/국립과천과학관",
      "2013~2014",
      "Unity3D/C#",
      ContestDialogue
    ),
  ];
  return ProjectCards(games);
}

function CLOSETDialogue() {
  return (
    <List>
      <ListItem>
        <ListItemText
          primary="Rendering Test"
          secondary="Developed rendering test system(patent pending) using Puppeteer and OpenCV and integrated into CI."
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="3D Model Loading System"
          secondary="Developed responsive and highly optimized 3D model loading system using RxJS, FP-TS and Draco3D."
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Rendering Performance Benchmarking System"
          secondary="Developed rendering performance benchmarking system using Puppeteer and integrated into CI."
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="CI"
          secondary="Set up CI using AWS, Github Flow, semantic-release"
        />
      </ListItem>
    </List>
  );
}

function CrusadersDialogue() {
  return (
    <List>
      <ListItem>
        <ListItemText
          primary="Graphics Optimization"
          secondary="I had reduced rendering time by 20% by making polygons that resembles the textures and using it as depthmask."
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="CI Development"
          secondary="Automated the build system for data sheets and Unity3d & Android & Xcode projects and their 300 kinds of build targets using Jenkins and Gradle."
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Authentication System Development"
          secondary="I was responsible for authentication of users via Google, Facebook, Apple and 13 different Chinese authenticaton services."
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Platform Specific Native Library Development"
          secondary="I had developed various platform-specific native libraries including iOS ForceTouch, Android screen recoder and many others."
        />
      </ListItem>
    </List>
  );
}

function EOSDialogue() {
  return (
    <List>
      <ListItem>
        <ListItemText
          primary="Map Editor Maintainence"
          secondary="I had developed map area indicator feature using Ear Clipping Algorithm."
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="유지보수/신규 피쳐 개발"
          secondary="버그 수정 및 다양한 업데이트 피쳐 개발."
        />
      </ListItem>
    </List>
  );
}

function ContestDialogue() {
  return (
    <List>
      <ListItem>
        <ListItemText primary="국립과천과학관 주최, 교육부 주관 전국 단위 경진대회용 게임 10여가지 개발/유지보수" />
      </ListItem>
    </List>
  );
}
