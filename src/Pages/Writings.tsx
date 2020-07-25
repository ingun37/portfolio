import React, { useEffect, useState } from 'react'
import Parser from 'rss-parser';
import { List, ListItem, ListItemText, Chip } from '@material-ui/core';

class WritingModel {
    constructor(
        public title:string,
        public categories:string[]
    ){}
}
const initialArray:WritingModel[] = []
function Writings() {
    const [models,setModels] = useState(initialArray)

    useEffect(() => {
        (new Parser()).parseURL("https://dev.to/feed/ingun37").then(x=>{
            setModels(
                x.items?.map(x=>new WritingModel(x.title || "", x.categories || [])) || []
                )
        })
    })

    return (
        <List>
            {
                models.map(model=>{
                    return (<ListItem>
                        <ListItemText primary={model.title} />
                        { model.categories.map(x=>(<Chip label={x} />))}
                        </ListItem>)
                })
            }
        </List>
    )
}

export default Writings;