import React from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    center: {
        textAlign: "center",
    }
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
        <div>
            <Typography variant="h2" className={classes.center}>
                Hi I'm Ingun
            </Typography>
            <Typography variant="h4"  className={classes.center}>
                I'm a ...
            </Typography>
            <Grid container className={classes.root} spacing={2}>
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
    const classes = useStyles();
    return (
        <Grid key={title} item>
            <Card>
                <CardContent>
                    <Typography variant="h5">
                        {title}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
