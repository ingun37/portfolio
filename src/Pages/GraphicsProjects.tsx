import React from 'react'
import animation from "./animation.jpg";
import deferred from "./deferred.jpg";
import c3d from "./3dc.jpg";

import {ProjectCards, ProjectProp} from "./ProjectCards";
export function GraphicsProjects() {
    const games: ProjectProp[] = [
        new ProjectProp("Implementation of Animating 3D Model", animation, null, "2015"),
        new ProjectProp("Implementation of Deferred Rendering", deferred, null, "2014"),
        new ProjectProp("Implementation of 3D Rendering Pipeline in Terminal", c3d, null, "2013")
    ];
    return (
        ProjectCards(games)
    );
}