import React, { ReactElement, ReactComponentElement } from 'react'
import { Grid, Paper, makeStyles, Theme, createStyles, Typography, List, ListItem, ListItemText, SvgIcon, ListItemIcon, Icon } from '@material-ui/core';
import * as _ from "lodash";
import AngularIcon from "./icons/angular.svg";
import ReactIcon from "./icons/react.svg";
import FirestoreIcon from "./icons/firestore.svg";
import GCPIcon from "./icons/gcp.svg";
import FireBaseIcon from "./icons/firebase.svg";
import DockerIcon from "./icons/docker.svg";
import KubernetesIcon from "./icons/kubernetes.svg";
import GRPCIcon from "./icons/grpc.svg";
import DGraphIcon from "./icons/dgraph.svg";
import MySvgIcon from './components/MySvgIcon';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            // width:100,
            padding: 8
        },
        list: {
            overflow: 'auto',
            maxHeight: 150
        },
        listIcon: {
            minWidth: '30px',
            overflow: 'visible'
        },
        imageIcon: {
            maxHeight: '80%',
            maxWidth: '80%',
            overflow: 'visible',
            marginBottom: 4
        },
        iconRoot: {
            textAlign: 'center',
            overflow: 'visible'
        }
    }),
);

class SkillProps {
    constructor(
        public name: string,
        public icon: string | null = null
    ) { }
}

const categoryNames = ["Front End", "Database", "Cloud", "DevOps", "API"]
const skills: SkillProps[][] = [
    [new SkillProps("Angular", AngularIcon), new SkillProps("React", ReactIcon), new SkillProps("ThreeJS")],
    [new SkillProps("Firestore", FirestoreIcon), new SkillProps("DGraph", DGraphIcon)],
    [new SkillProps("GCP", GCPIcon), new SkillProps("Firebase", FireBaseIcon)],
    [new SkillProps("Docker", DockerIcon), new SkillProps("Kebernetes", KubernetesIcon)],
    [new SkillProps("gRPC", GRPCIcon)],

]
const categories: CategoryProps[] = _.zipWith(categoryNames, skills, (x, y) => ({
    name: x,
    skills: y || []
}))
function FullStack() {
    const classes = useStyles();
    return (
        <Grid container justify="center" spacing={1}>
            {categories.map((value) => (
                <Grid key={value.name} item>
                    <CategoryItem {...value} />
                </Grid>
            ))}
        </Grid>
    )
}


interface CategoryProps {
    name: string,
    skills: SkillProps[],
}
function CategoryItem(props: CategoryProps) {
    const classes = useStyles();
    const icon = (src:string)=> (
        <MySvgIcon src={src} />
    )
    return (
        <Paper className={classes.paper}>
            <Typography variant="h5">{props.name}</Typography>
            <List dense className={classes.list} disablePadding>
                {
                    props.skills.map(skill => {
                        return (
                            <ListItem key={skill.name} dense disableGutters>
                                {skill.icon ? icon(skill.icon) : null}
                                <ListItemText primary={skill.name}></ListItemText>
                            </ListItem>
                        )
                    })
                }
            </List>
        </Paper>
    )
}
export default FullStack;