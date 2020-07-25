import React, { ReactElement, ReactComponentElement } from 'react'
import { Grid, Paper, makeStyles, Theme, createStyles, Typography, List, ListItem, ListItemText, SvgIcon, ListItemIcon } from '@material-ui/core';
import * as _ from "lodash";
import {ReactComponent as AngularIcon} from "./icons/angular.svg";

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
              minWidth: '30px'
          }
    }),
);

class SkillProps {
    constructor(
        public name: string,
        public icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string | undefined }>
    ){}
}

const categoryNames = ["Front End", "Database", "Back End", "Cloud", "DevOps", "API"]
const skills:SkillProps[][] = [
    [new SkillProps("Angular", AngularIcon)]
]
const categories:CategoryProps[] = _.zipWith(categoryNames, skills, (x,y)=>({
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
    return (
        <Paper className={classes.paper}>
            <Typography variant="h5">{props.name}</Typography>
            <List dense className={classes.list} disablePadding>
                {
                    props.skills.map(skill=>{
                        return (
                            <ListItem key={skill.name} dense disableGutters>
                                <ListItemIcon className={classes.listIcon}>
                                    <SvgIcon>
                                        <skill.icon />
                                    </SvgIcon>
                                </ListItemIcon>
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