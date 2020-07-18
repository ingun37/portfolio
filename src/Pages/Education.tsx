import React from 'react'

class Account {
    constructor(
        public start:string,
        public end:string,
        public institution: string,
    ) {}
}

export function Education() {
    const accounts:Account[] = [
        new Account("2019", "2019", "Bachelor's Degree Examination for Self-Education (BDES)"),
        new Account("2009", "2012", "Korea Animation Highschool"),
    ]
    return (
        <div>
            {
                accounts.map(x=>Institution(x))
            }
        </div>
    )
}
function Institution(inst:Account) {
    return (
        <div>
            {inst.institution}
        </div>
    )
}