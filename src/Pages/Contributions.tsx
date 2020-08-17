import React from 'react'
import {ProjectCards, ProjectProp} from "../components/ProjectCards";

export function Contributions() {
    const games: ProjectProp[] = [
        new ProjectProp("goderive", null, null, null, "Code Generation for Functional Programming, Concurrency and Generics in Golang", undefined, "https://github.com/awalterschulze/goderive/pull/53"),
        new ProjectProp("iosMath", null, null, null, "Beautiful math equation rendering on iOS and MacOS", undefined, "https://github.com/kostub/iosMath/pull/121"),
    ];
    return (
        ProjectCards(games)
    );
}