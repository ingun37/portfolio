import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


const useLocalStyles = makeStyles((theme: Theme) =>
    createStyles({
        innerCard: {
            padding: 4,
            backgroundColor: 'rgba(0,0,0,0.5)',
            paddingLeft: 8,
            paddingRight: 8,
            // opacity: 0.2
        },
        cardTitle: {
            color: 'white'
        },
    }),
);

function Keywords(keywords: KeywordProps[]) {
    const [spacing, setSpacing] = React.useState(2);

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>
                        {
                            keywords.map(x => KeywordCard(x))
                        }
                    </Grid>

                </Grid>

            </Grid>
        </div>

    );
}

export default Keywords;
export interface KeywordProps {
    title: string;
    color: string;
}
function KeywordCard(props: KeywordProps) {
    const { title, color } = props
    const localClasses = useLocalStyles();


    const cardClasses = makeStyles((theme: Theme) =>
        createStyles({
            paper: {
                paddingTop: 8,
                paddingBottom: 8,
                backgroundColor: color,
            },
        }),
    )();

    return (
        <Grid key={title} item>
            <Paper className={cardClasses.paper}>
                <div className={localClasses.innerCard}>
                    <Typography variant="h5" className={localClasses.cardTitle}>
                        {title}
                    </Typography>
                </div>
            </Paper>
        </Grid>
    )
}
