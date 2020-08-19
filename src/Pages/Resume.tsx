import React from 'react'
import {ProjectCards, ProjectProp} from "../components/ProjectCards";
import ResumePdf from '../resume.pdf';
import ResumePortfolio from '../resume+portfolio.pdf';

export default function Resume() {
    const games: ProjectProp[] = [
        new ProjectProp("resume", null, null, null, "Brief, on-point resume in both Korean & English", undefined, ResumePdf),
        new ProjectProp("resume+portfolio", null, null, null, "Resume + descriptive portfolio in Korean", undefined, ResumePortfolio),
    ];
    return (
        ProjectCards(games)
    );
}