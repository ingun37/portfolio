import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Business from '@material-ui/icons/Business';
import AccessTime from '@material-ui/icons/AccessTime';
import Notes from '@material-ui/icons/Notes';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { CardActions, Dialog, Button, CardActionArea } from '@material-ui/core';

const useLocalStyles = makeStyles((theme) => ({
    card: {
        width: 300,
    },
    media: {
        height: 140,
    },
}));

export class ProjectProp {
    constructor(
        public name: string,
        public img: string,
        public organization: string | null,
        public time: string | null,
        public note: string | null = null,
        public detail?: (() => JSX.Element),
        public redirect?: string,
    ) { }
}
export function ProjectCards(projects: ProjectProp[]) {

    return (
        <Grid container spacing={2}>
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
    const localClasses = useLocalStyles();
    const [diaOpen, setIdaOpen] = useState(false)
    return (
        <Grid key={project.name} item>
            <Card className={localClasses.card}>
                <CardActionArea onClick={() => {
                    if (project.detail) {
                        setIdaOpen(true);
                    } else if (project.redirect) {
                        window.open(project.redirect);
                    }
                }}>
                    <CardMedia
                        className={localClasses.media}
                        image={project.img}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography variant="h5">
                            {project.name}
                        </Typography>

                        <List dense={true} disablePadding={true}>
                            {project.organization ? <ProjectPropertyItem icon={<Business />} primary={project.organization} /> : null}
                            {project.time ? <ProjectPropertyItem icon={<AccessTime />} primary={project.time} /> : null}
                            {project.note ? <ProjectPropertyItem icon={<Notes />} primary={project.note} /> : null}
                        </List>
                    </CardContent>
                </CardActionArea>

            </Card>
            <Dialog open={diaOpen} onClose={() => setIdaOpen(false)}>
                {project.detail ? project.detail() : null}
            </Dialog>
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

