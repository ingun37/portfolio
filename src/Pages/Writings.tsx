import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import Parser from 'rss-parser';
import { List, ListItem, ListItemText, Chip, makeStyles, Divider, ListItemIcon } from '@material-ui/core';
import { on } from 'process';
import { async } from 'rxjs';
import OpenInNew from '@material-ui/icons/OpenInNew';

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
        public categories: string[],
        public link: string,
    ) { }
}
let fetched = fetch("https://dev.to/feed/ingun37").then(x => x.text()).then(x => (new Parser()).parseString(x)).then(x => {
    return x.items?.map(x => new WritingModel(x.title || "", x.categories || [], x.link || "")) || []
}).then(rssWritings=>{
    const article1 = new WritingModel("UIView shouldn’t be File’s Owner", ["#ios", "#xib", "#filesowner", "#uiview"], "https://dev.to/ingun37/file-s-owner-is-not-for-uiview-3n9g")
    const article2 = new WritingModel("UIView 는 File’s Owner 가 될 수 없어요", ["#ios", "#xib", "#filesowner", "#uiview"], "https://dev.to/ingun37/uiview-file-s-owner-2a20")
    const prefixWritings = [article1, article2]
    return prefixWritings.concat(rssWritings)
})
const initialArray: WritingModel[] = []
function Writings() {
    const [models, setModels] = useState(initialArray)

    const ref = React.createRef<HTMLDivElement>()


    useEffect(() => {
        console.log('aoeuaoeu')
        fetched.then(articles=>{
            setModels(articles)
        });

        ref.current?.addEventListener('wheel', (e) => {
            e.stopPropagation()
            return false
        })
    }, [])
    const classes = useStyles();



    return (
        <div ref={ref} className={classes.root}>
            
            <List className={classes.list}>
                {
                    models.map(model => {
                        return (
                            <div>

                                <ListItem key={model.title} button onClick={() => window.open(model.link)}>
                                    <ListItemText primary={model.title} />
                                    {model.categories.map(x => (<Chip label={x} />))}
                                </ListItem>
                                <Divider />
                            </div>
                        )
                    })
                }
                <ListItem button onClick={() => window.open("https://dev.to/ingun37")}>
                    <ListItemText primary="See More" />
                    <ListItemIcon>

                    <OpenInNew />
                    </ListItemIcon>
                </ListItem>
            </List>
        </div>
    );

}

export default Writings;