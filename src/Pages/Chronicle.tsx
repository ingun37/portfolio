import React from 'react'

class Account {
    constructor(
        public start:string,
        public end:string,
        public company: string,
        public position: string,
    ) {}
}

export function Chronicle() {
    const accounts:Account[] = [
        new Account("2015.05", "2017.09","Loadcomplete","Developer"),
        new Account("2014.09", "2015.05","Envius","Developer"),
        new Account("2013.05", "2014.09","Swink","Developer"),
        new Account("2010.07", "2011.05","SW Maestro","Mentee"),
    ]
    return (
        <div>
            {accounts.map(x=>Work(x))}
        </div>
    )
}

function Work(account:Account) {
    return (
        <div>
            {account.company}
        </div>
    )
}