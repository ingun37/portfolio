import React from 'react'
import { ListItemIcon, makeStyles, Theme, createStyles, Icon } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        imageIcon: {
            maxHeight: '80%',
            maxWidth: '80%',
            overflow: 'visible',
        },
        iconRoot: {
            textAlign: 'center',
            overflow: 'visible'
        }
    }),
);

interface MySvgIconProps {
    src: string
}
function MySvgIcon({ src }: MySvgIconProps) {
    const classes = useStyles();

    return (
        <Icon classes={{ root: classes.iconRoot }}>
            <img className={classes.imageIcon} src={src} />
        </Icon>
    )
}
export default MySvgIcon;