import React from 'react'
import cru from "./cru.jpg";
import eos from "./eos.jpg";
import contest from "./contest.jpeg";
import {ProjectCards, ProjectProp} from "./ProjectCards";
export function GraphicsProjects() {
    const games: ProjectProp[] = [
        new ProjectProp("Implementation of Animation System", cru, null, "2015~2017"),
        new ProjectProp("Echo of Soul", eos, null, "2014~2015"),
        new ProjectProp("국림과천과학관 온라인과학게임대회", contest, null, "2013~2014"),
    ];
    return (
        ProjectCards(games)
    );
}