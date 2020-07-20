import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import useStyles from "./Styles";


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
