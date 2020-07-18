import React from 'react'

export function Intro() {
    const jobs = [
        "FullStack/Game/Application Developer",
        "Functional Programmer",
        "Mathematics Enthusiast",
        "Authentic Painter",]
    return (
        <div>
            <div>
                Hi I'm Ingun. <br />
          I'm a ...
        </div>
            {
                jobs.map(job => Profession(job))
            }
        </div>
    );
}

function Profession(title: string) {
    return (
        <div>{title}</div>
    )
}
