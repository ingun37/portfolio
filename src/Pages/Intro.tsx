import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';

import CardContent from '@material-ui/core/CardContent';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useLocalStyles = makeStyles((theme: Theme) =>
    createStyles({
        innerCard: {
            padding: 4,
            backgroundColor: 'rgba(0,0,0,0.5)',
            // opacity: 0.2
        },
        cardTitle: {
        },
        paper: {
            paddingTop: 12,
            paddingBottom: 12,
        }
    }),
);

export function Intro() {
    const jobs = [
        "FullStack/Game/Application Developer",
        "Functional Programmer",
        "Mathematics Enthusiast",
        "Authentic Painter",]
    const [spacing, setSpacing] = React.useState(2);

    return (
        <div>
            <Grid container  spacing={2}>
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

function Profession(title: string) {
    const localClasses = useLocalStyles();
    return (
        <Grid key={title} item>

            <Paper className={localClasses.paper}>
                <div className={localClasses.innerCard}>
                    <Typography variant="h5" className={localClasses.cardTitle}>
                        {title}
                    </Typography>
                </div>
            </Paper>
        </Grid>
    )
}
