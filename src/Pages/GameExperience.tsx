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
import Business from '@material-ui/icons/Business';
import AccessTime from '@material-ui/icons/AccessTime';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useLocalStyles = makeStyles((theme) => ({
    card: {
        width: 300,
    },
}));

class Game {
    constructor(
        public name: string,
        public img: string,
        public organization: string,
        public time: string,
    ) { }
}
export function GameExperience() {
    const classes = useStyles();
    const games: Game[] = [
        new Game("Crusaders Quest", cru, "LoadComplete/NHN Entertainment", "2015~2017"),
        new Game("Echo of Soul", eos, "Nvius/Hangame", "2014~2015"),
        new Game("국림과천과학관 온라인과학게임대회", contest, "Swink/국립과천과학관", "2013~2014"),
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

                    <List dense={true}>
                    <GameInfoItem icon={<Business />} primary={game.organization} />
                    <GameInfoItem icon={<AccessTime />} primary={game.time} />
                    </List>
                </CardContent>
            </Card>
        </Grid>
    )
}

interface GameInfoItemProps {
    icon: React.ReactElement;
    primary: string;
}

function GameInfoItem(props: GameInfoItemProps) {
    const { icon, primary } = props;
    return (
        <ListItem disableGutters={true} >
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText>
            {primary}
            </ListItemText>
        </ListItem>
    );
}

