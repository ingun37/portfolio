import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export interface TemplateProps {
    title:string,
    subTitle:string,
    comp:React.ReactElement
}


const useStyles = makeStyles((theme) => ({
    center: {
        textAlign: "center",
    },
}));


export function Template(props:TemplateProps) {
    const classes = useStyles();
    const {title, subTitle, comp} = props;
    return (
        <div>
            <Typography variant="h2" className={classes.center}>
                {title}            
            </Typography>
            <Typography variant="h4" className={classes.center}>
                {subTitle}
            </Typography>
            {comp}
        </div>
    );
}