import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';

import CardContent from '@material-ui/core/CardContent';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { palette } from '@material-ui/system';
import globalTheme from './GlobalTheme';

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
    const jobs: ProfessionProps[] = [
        { title: "FullStack/Game/Application Developer", color: globalTheme.palette.primary.light },
        { title: "Functional Programmer", color: globalTheme.palette.primary.light },
        { title: "Mathematics Enthusiast", color: globalTheme.palette.primary.light },
        { title: "Authentic Painter", color: globalTheme.palette.primary.light },
    ]
    const [spacing, setSpacing] = React.useState(2);

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>
                        {
                            jobs.map(x => Profession(x))
                        }
                    </Grid>

                </Grid>

            </Grid>
        </div>

    );
}

interface ProfessionProps {
    title: string;
    color: string;
}
function Profession(props: ProfessionProps) {
    const { title, color } = props
    const localClasses = useLocalStyles();


    const cardClasses = makeStyles((theme: Theme) =>
        createStyles({
            paper: {
                paddingTop: 8,
                paddingBottom: 8,
                backgroundColor: color,
            },
        }),
    )();

    return (
        <Grid key={title} item>
            <Paper className={cardClasses.paper}>
                <div className={localClasses.innerCard}>
                    <Typography variant="h5" className={localClasses.cardTitle}>
                        {title}
                    </Typography>
                </div>
            </Paper>
        </Grid>
    )
}
