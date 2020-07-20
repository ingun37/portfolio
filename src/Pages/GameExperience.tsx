import React from 'react'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import useStyles from "./Styles";
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import cru from "./cru.jpg";
import eos from "./eos.jpg";
import contest from "./contest.jpeg";
import { makeStyles } from '@material-ui/core/styles';

const useLocalStyles = makeStyles((theme) => ({
    card: {
        width: 300,
    },
}));

class Game {
    constructor(
        public name: string,
        public img: string,
    ) { }
}
export function GameExperience() {
    const classes = useStyles();
    const games: Game[] = [
        new Game("Crusaders Quest", cru),
        new Game("Echo of Soul", eos),
        new Game("국림과천과학관 온라인과학게임대회", contest),
    ];
    return (
        <div>
            <Typography variant="h2" className={classes.center}>
                AS A GAME DEVELOPER
            </Typography>
            <Typography variant="h4" className={classes.center}>
                I have participated in developing various commercially successful games.
            </Typography>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>
                        {
                            games.map(x => GameCard(x))
                        }
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}


function GameCard(game: Game) {
    const classes = useStyles();
    const localClasses = useLocalStyles();
    return (
        <Grid key={game.name} item>
            <Card className={localClasses.card}>
                <CardMedia
                    className={classes.media}
                    image={game.img}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography variant="h5">
                        {game.name}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
