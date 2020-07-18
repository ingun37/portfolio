import React from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export function Intro() {
    const jobs = [
        "FullStack/Game/Application Developer",
        "Functional Programmer",
        "Mathematics Enthusiast",
        "Authentic Painter",]
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center">
                    {
                        jobs.map(x => Profession(x))
                    }
                </Grid>

            </Grid>

        </Grid>

    );
}

function Profession(title: string) {
    const classes = useStyles();
    return (
        <Grid key={title} item>
            <Paper className={classes.paper}>
                {title}
            </Paper>
        </Grid>
    )
}
