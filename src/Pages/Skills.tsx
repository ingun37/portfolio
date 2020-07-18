import React from 'react'

interface SkillKV {
    category: string;
    skills: string[];
}

export function Skills() {
    const skills: SkillKV[] = [
        { category: "Game", skills: ["Unity3D"] },
        { category: "Graphics", skills: "OpenGL,Metal,OpenCV".split(",") },
        { category: "FullStack", skills: "Angular, React, Flux, ThreeJS, gRPC, NodeJS".split(",").map(x => x.trim()) },
        { category: "DB", skills: "Redis, RDBMS, FireStore, DGraph, ORM".split(",").map(x => x.trim()) },
        { category: "DevOps", skills: "Jenkins, Gradle, Kubernetes, Docker".split(",").map(x => x.trim()) },
        { category: "Application", skills: ["iOS"] },
        { category: "Languages", skills: "Haskell, C, C++, C#, ObjC, Swift, Go, Groovy, Python, Ruby, Java, Kotlin".split(",").map(x => x.trim()) },
        { category: "Cloud Platform", skills: "Firebase, GCP".split(",").map(x => x.trim()) }
    ];
    return (
        <div>
            {skills.map(kv => SkillCategory(kv))}
        </div>
    )
}

function SkillCategory({ category, skills }: SkillKV) {
    return (
        <div>
            {category} : ...
        </div>
    )
}