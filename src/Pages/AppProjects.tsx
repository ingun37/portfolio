import React from 'react'
import ebs from "./ebs.png";
import matrix from "./matrix.jpeg";

import contest from "./contest.jpeg";
import {ProjectCards, ProjectProp} from "./ProjectCards";
export function AppProjects() {
    const games: ProjectProp[] = [
        new ProjectProp("Expressive Matrix Calculator", matrix, null, "2013~2014"),
        new ProjectProp("EBS어학FM", ebs, "Swink/EBSFM", "2019"),
    ];
    return (
        ProjectCards(games)
    );
}