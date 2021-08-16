import React from "react";
import matrix from "../images/matrix.jpeg";

import { ProjectCards, ProjectProp } from "../components/ProjectCards";
import ebs from "../images/ebs.png";
import { List, ListItem, ListItemText } from "@material-ui/core";

export function AppProjects() {
  const games: ProjectProp[] = [
    new ProjectProp(
      "EBS어학FM",
      ebs,
      "Swink/EBSFM",
      "2013~2014",
      "Objective-C",
      EBSDialogue
    ),
    new ProjectProp(
      "Expressive Matrix Calculator",
      matrix,
      null,
      "2019",
      null,
      undefined,
      "https://github.com/ingun37/mat4ipad"
    ),
  ];
  return ProjectCards(games);
}

function EBSDialogue() {
  return (
    <List>
      <ListItem>
        <ListItemText primary="I had developed the entire application including UI, Network Session Threading and Audio Streaming." />
      </ListItem>
    </List>
  );
}
