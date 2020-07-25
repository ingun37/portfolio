import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import Parser from 'rss-parser';
import { List, ListItem, ListItemText, Chip, makeStyles } from '@material-ui/core';
import { on } from 'process';

const useStyles = makeStyles((theme) => ({
    root: {
        maxHeight: '30vh',
        overflow: 'auto',
        msTouchAction: 'pan-y',
        touchAction: 'pan-y'
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
        (new Parser()).parseURL("https://dev.to/feed/ingun37").then(x => {
            setModels(
                x.items?.map(x => new WritingModel(x.title || "", x.categories || [])) || []
            )
        })

        ref.current?.addEventListener('wheel', (e)=>{
            e.stopPropagation()
            return false
        })
    })
    const classes = useStyles();



    return (
        <div ref={ref}>
            <List className={classes.root}>
                {
                    models.map(model => {
                        return (
                            <ListItem>
                                <ListItemText primary={model.title} />
                                {model.categories.map(x => (<Chip label={x} />))}
                            </ListItem>)
                    })
                }
            </List>
        </div>
    );

}

export default Writings;