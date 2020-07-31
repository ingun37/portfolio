import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { blue } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';
import Fab from '@material-ui/core/Fab';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack';
import globalTheme from '../global/GlobalTheme';
import { page$ } from '../global/State';
import { filter, take } from 'rxjs/operators';
import "./Template.css";

export interface TemplateProps {
    title: string,
    subs: [string, React.ReactElement][],
    verticalPage: number
}


const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: "center",
        // fontWeight: 'bold'
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
        fontWeight: 'bold'
        // color: 'white'
    },
    subBack: {
        width: '100%',
        backgroundColor: '#eeeeee',
        padding: 16,

    },
    rightArrow: {
        position: 'absolute',
        marginTop: '1em',
        right: 32,
        zIndex: 10,
        backgroundColor: globalTheme.palette.primary.main + "88",
    },
    leftArrow: {
        position: 'absolute',
        marginTop: '1em',
        left: 32,
        zIndex: 10,
        backgroundColor: globalTheme.palette.primary.main + "88"

    },
    pulseAni: {
        animation: 'pulse 2s',
        animationIterationCount: 3
    }
}));


interface PulseRightArrowProps {
    verticalPageNumber: number,
    onClick: () => void
}
function PulseRightArrow(props: PulseRightArrowProps) {
    const [trigger, setTrigger] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        const pageTurn = page$.pipe(filter(x => x[0] == props.verticalPageNumber), take(1)).subscribe({
            next(x) {
                setTrigger(true)
            }
        })
        return function cleanup() {
            pageTurn.unsubscribe()
        }
    })
    return (
        <Fab variant="extended" color="primary" aria-label="add"
            className={classes.rightArrow + " " + (trigger ? classes.pulseAni : "")}
            onClick={props.onClick}>
            There's more!
            <ArrowForward />
        </Fab>
    );
}

export function Template(props: TemplateProps) {
    const classes = useStyles();
    const [count, setCount] = useState(0);
    const { title, subs, verticalPage } = props;
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

    const leftArrow = (
        <Fab color="primary" aria-label="add" className={classes.leftArrow} onClick={
            () => setCount((count - 1) % subs.length)
        }>
            <ArrowBack />
        </Fab>
    );
    return (
        <div>
            <Typography variant="h2" className={classes.title}>
                {title}
            </Typography>

            <div className={classes.subBack}>
                {count < subs.length - 1 ? <PulseRightArrow verticalPageNumber={verticalPage} onClick={() => { setCount((count + 1) % subs.length) }} /> : null}
                {count > 0 ? leftArrow : null}

                <Typography variant="h4" className={classes.subtitle}>
                    {subs[count][0]}
                </Typography>

                {subs[count][1]}
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