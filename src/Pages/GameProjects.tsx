import React from 'react'
import cru from "./cru.jpg";
import eos from "./eos.jpg";
import contest from "./contest.jpeg";
import {ProjectCards, ProjectProp} from "./ProjectCards";
export function GameProjects() {
    const games: ProjectProp[] = [
        new ProjectProp("Crusaders Quest", cru, "LoadComplete/NHN Entertainment", "2015~2017"),
        new ProjectProp("Echo of Soul", eos, "Nvius/Hangame", "2014~2015"),
        new ProjectProp("국림과천과학관 온라인과학게임대회", contest, "Swink/국립과천과학관", "2013~2014"),
    ];
    return (
        ProjectCards(games)
    );
}