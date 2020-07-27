import React from 'react'
import ebs from "../images/ebs.png";
import matrix from "../images/matrix.jpeg";

import {ProjectCards, ProjectProp} from "../components/ProjectCards";
export function AppProjects() {
    const games: ProjectProp[] = [
        new ProjectProp("Expressive Matrix Calculator", matrix, null, "2019"),
        new ProjectProp("EBS어학FM", ebs, "Swink/EBSFM", "2013~2014"),
    ];
    return (
        ProjectCards(games)
    );
}