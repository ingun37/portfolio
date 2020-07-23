import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { blue } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Fab from '@material-ui/core/Fab';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack';

const titleTheme = createMuiTheme({
    typography: {
        h2: {
            fontFamily: [
                'Anton',
            ].join(','),
        },
        h4: {
            fontFamily: [
                'Bebas Neue',
            ].join(','),
        },
        h5: {
            fontFamily: [
                'Bebas Neue', 'Do Hyeon',
            ].join(','),
        }
    },
});

export interface TemplateProps {
    title: string,
    subs: [string, React.ReactElement][]
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
        marginTop: 26,
        right: 32
    },
    leftArrow: {
        position: 'absolute',
        marginTop: 26,
        left: 32
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
    const rightArrow = (
        <Fab variant="extended" color="primary" aria-label="add" className={classes.rightArrow} onClick={
            () => setCount((count + 1) % subs.length)
        }>
            There's more!
            <ArrowForward />
        </Fab>
    );
    const leftArrow = (
        <Fab color="primary" aria-label="add" className={classes.leftArrow} onClick={
            () => setCount((count - 1) % subs.length)
        }>
            <ArrowBack />
        </Fab>
    );
    return (
        <ThemeProvider theme={titleTheme}>
            <div>
                <Typography variant="h2" className={classes.title}>
                    {title}
                </Typography>

                <div className={classes.subBack}>
                    {count < subs.length-1 ? rightArrow : null}
                    {count > 0 ? leftArrow : null}

                    <Typography variant="h4" className={classes.subtitle}>
                        {subs[count][0]}
                    </Typography>

                    {subs[count][1]}
                </div>


                {subs.length > 1 ? stepper : null}
            </div>
        </ThemeProvider>

    );
}

function DumpComp() {
    return (
        <div>what</div>
    );
}