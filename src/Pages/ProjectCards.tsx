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

export class ProjectProp {
    constructor(
        public name: string,
        public img: string,
        public organization: string,
        public time: string,
    ) { }
}
export function ProjectCards(projects: ProjectProp[]) {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                    {
                        projects.map(x => ProjectCard(x))
                    }
                </Grid>
            </Grid>
        </Grid>
    );
}


function ProjectCard(project: ProjectProp) {
    const classes = useStyles();
    const localClasses = useLocalStyles();

    return (
        <Grid key={project.name} item>
            <Card className={localClasses.card}>
                <CardMedia
                    className={classes.media}
                    image={project.img}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography variant="h5">
                        {project.name}
                    </Typography>

                    <List dense={true} disablePadding={true}>
                        <ProjectPropertyItem icon={<Business />} primary={project.organization} />
                        <ProjectPropertyItem icon={<AccessTime />} primary={project.time} />
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

function ProjectPropertyItem(props: GameInfoItemProps) {
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

