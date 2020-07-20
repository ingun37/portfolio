import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { blue } from '@material-ui/core/colors';

export interface TemplateProps {
    title: string,
    subs: [string, React.ReactElement][]
}


const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: "center",
        fontWeight: 'bold'
    },
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    subtitle: {
        textAlign: "center",
        marginBottom: 16,
        // color: 'white'
    },
    back: {
        width: '100%',
        // backgroundColor: '#930202',
        paddingTop: 16,
        paddingBottom: 16
    },
    right: {
        // position: 'absolute',
        // height: '100%',
        // right: 0,
        // width: '20%',
        // backgroundColor: '#001100'
    }
}));


export function Template(props: TemplateProps) {
    const classes = useStyles();
    const [count, setCount] = useState(0);
    const { title, subs } = props;
    const steps = subs.map(x => x[0]);
    const stepper = (
        <Stepper activeStep={count} alternativeLabel>
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    );
    return (
        <div>
            <Typography variant="h2" className={classes.title}>
                {title}
            </Typography>
            <Button onClick={
                () => setCount((count + 1) % subs.length)
            }>next</Button>

            <div className={classes.back}>
                <Typography variant="h4" className={classes.subtitle}>
                    {subs[count][0]}
                </Typography>
                {subs[count][1]}
                <div className={classes.right}></div>
            </div>


            {subs.length > 1 ? stepper : null}
        </div>
    );
}

function DumpComp() {
    return (
        <div>what</div>
    );
}