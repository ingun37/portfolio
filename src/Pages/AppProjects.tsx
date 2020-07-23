import React from 'react'
import ebs from "./ebs.png";
import matrix from "./matrix.jpeg";

import contest from "./contest.jpeg";
import {ProjectCards, ProjectProp} from "./ProjectCards";
export function AppProjects() {
    const games: ProjectProp[] = [
        new ProjectProp("Expressive Matrix Calculator", matrix, null, "2019"),
        new ProjectProp("EBS어학FM", ebs, "Swink/EBSFM", "2013~2014"),
    ];
    return (
        ProjectCards(games)
    );
}