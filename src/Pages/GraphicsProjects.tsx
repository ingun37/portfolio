import React from 'react'
import animation from "../images/animation.jpg";
import deferred from "../images/deferred.jpg";
import c3d from "../images/3dc.jpg";

import {ProjectCards, ProjectProp} from "../components/ProjectCards";
export function GraphicsProjects() {
    const games: ProjectProp[] = [
        new ProjectProp("Implementation of entire 3D Model animation system using native graphics library (Metal/C++)", animation, null, "2015", null, undefined, "https://github.com/ingun37/sujak"),
        new ProjectProp("Implementation of Deferred Rendering using native graphics lxbrary (OpenGL/C++)", deferred, null, "2014", null, undefined, "https://ingun37.wordpress.com/2015/03/30/deferred-shading/"),
        new ProjectProp("Implementation of 3D Rendering Pipeline in Terminal (C)", c3d, null, "2013", null, undefined, "https://www.youtube.com/watch?v=DNTVw-CN8SI&feature=youtu.be")
    ];
    return (
        ProjectCards(games)
    );
}