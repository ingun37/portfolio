import React from 'react'
import { ListItemIcon, makeStyles, Theme, createStyles, Icon } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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

interface MySvgIconProps {
    src:string
}
function MySvgIcon({src}:MySvgIconProps) {
    const classes = useStyles();

    return (
        <ListItemIcon className={classes.listIcon}>
            <Icon classes={{ root: classes.iconRoot }}>
                <img className={classes.imageIcon} src={src} />
            </Icon>
        </ListItemIcon>
    )
}
export default MySvgIcon;