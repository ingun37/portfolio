import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';

import CardContent from '@material-ui/core/CardContent';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { palette } from '@material-ui/system';
import globalTheme from './GlobalTheme';
import Keywords, { KeywordProps } from './Keywords';

const useLocalStyles = makeStyles((theme: Theme) =>
    createStyles({
        innerCard: {
            padding: 4,
            backgroundColor: 'rgba(0,0,0,0.5)',
            paddingLeft: 8,
            paddingRight: 8,
            // opacity: 0.2
        },
        cardTitle: {
            color: 'white'
        },
    }),
);

export function Intro() {
    const keywords: KeywordProps[] = [
        { title: "FullStack/Game/Application Developer", color: globalTheme.palette.primary.light },
        { title: "Functional Programmer", color: globalTheme.palette.primary.light },
        { title: "Mathematics Enthusiast", color: globalTheme.palette.primary.light },
        { title: "Authentic Painter", color: globalTheme.palette.primary.light },
    ]

    return (
        Keywords(keywords)

    );
}
