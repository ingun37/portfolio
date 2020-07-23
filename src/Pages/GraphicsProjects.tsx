import React from 'react'
import animation from "./animation.jpg";
import deferred from "./deferred.jpg";
import c3d from "./3dc.jpg";

import {ProjectCards, ProjectProp} from "./ProjectCards";
export function GraphicsProjects() {
    const games: ProjectProp[] = [
        new ProjectProp("Implementation of 3D Model animation using native graphics library (Metal/C++)", animation, null, "2015"),
        new ProjectProp("Implementation of Deferred Rendering using native graphics lxbrary (OpenGL/C++)", deferred, null, "2014"),
        new ProjectProp("Implementation of 3D Rendering Pipeline in Terminal (C)", c3d, null, "2013")
    ];
    return (
        ProjectCards(games)
    );
}