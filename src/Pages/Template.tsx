import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
export interface TemplateProps {
    title:string,
    subs:[string, React.ReactElement][]
}


const useStyles = makeStyles((theme) => ({
    center: {
        textAlign: "center",
    },
}));


export function Template(props:TemplateProps) {
    const classes = useStyles();
    const [count, setCount] = useState(0)
    const {title, subs} = props;
    return (
        <div>
            <Typography variant="h2" className={classes.center}>
                {title}            
            </Typography>
            <Typography variant="h4" className={classes.center}>
                {subs[count][0]}
            </Typography>
            <Button onClick={
                ()=>setCount((count+1)%subs.length)
            }>next</Button>
            {subs[count][1]}
        </div>
    );
}

function DumpComp() {
    return (
        <div>what</div>
    );
}