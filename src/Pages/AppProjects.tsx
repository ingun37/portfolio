import React from "react";
import matrix from "../images/matrix.jpeg";

import { ProjectCards, ProjectProp } from "../components/ProjectCards";

export function AppProjects() {
  const games: ProjectProp[] = [
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
