import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {ProjectCards, ProjectProp} from "./ProjectCards";
import mathpng from "./math.png";
import algebra from "./algebra.png";

export function MathProjects() {
    const [spacing, setSpacing] = React.useState(2);
    const areas: ProjectProp[] = [
        new ProjectProp("Original Answers to Math Books", mathpng, null, null, "The website I post my original answers to mathematical books."),
        new ProjectProp("Complex Matrix Algebra", algebra, null, null, "Implementation of abstract algebra in Swift"),
    ];
    return (
        ProjectCards(areas)
    );
}
