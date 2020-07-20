import React from 'react'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

interface ListItemLinkProps {
    icon?: React.ReactElement;
    primary: string;
}

function ListItemLink(props: ListItemLinkProps) {
    const { icon, primary } = props;

    return (
        <li>
            <ListItem>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={primary} />
            </ListItem>
        </li>
    );
}

const useLocalStyles = makeStyles({
    root: {
        width: 360,
    },
});

function ProjectProperties(props: ListItemLinkProps[]) {
    return (
        <List aria-label="main mailbox folders">
            {
                props.map(x=>ListItemLink(x))
            }
        </List>
    );
}


class ProjectInfo {
    constructor(
        public name: string,
        public img: string,
        public organization: string,
        public time: string,
    ) { }
}
