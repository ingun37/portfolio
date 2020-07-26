import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import Parser from 'rss-parser';
import { List, ListItem, ListItemText, Chip, makeStyles, Divider } from '@material-ui/core';
import { on } from 'process';
import { async } from 'rxjs';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
    },
    list: {
        maxHeight: '30vh',
        overflow: 'auto',
        msTouchAction: 'pan-y',
        touchAction: 'pan-y',
        backgroundColor: theme.palette.background.paper,
        maxWidth: '70vw'
    },
}));
class WritingModel {
    constructor(
        public title: string,
        public categories: string[]
    ) { }
}
const initialArray: WritingModel[] = []
function Writings() {
    const [models, setModels] = useState(initialArray)

    const ref = React.createRef<HTMLDivElement>()

    useEffect(() => {
        fetch("https://dev.to/feed/ingun37").then(x => x.text()).then(x => (new Parser()).parseString(x)).then(x => {
            setModels(
                x.items?.map(x => new WritingModel(x.title || "", x.categories || [])) || []
            )
        })

        ref.current?.addEventListener('wheel', (e) => {
            e.stopPropagation()
            return false
        })
    })
    const classes = useStyles();



    return (
        <div ref={ref} className={classes.root}>
            <List className={classes.list}>
                {
                    models.map(model => {
                        return (
                            <div>

                                <ListItem key={model.title}>
                                    <ListItemText primary={model.title} />
                                    {model.categories.map(x => (<Chip label={x} />))}
                                </ListItem>
                                <Divider />
                            </div>
                        )
                    })
                }
            </List>
        </div>
    );

}

export default Writings;