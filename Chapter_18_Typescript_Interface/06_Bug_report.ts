interface BugReport{
    id:number;
    title:string,
    severity:string,
    stepToReproduce:string[]
}

const bugReport1:BugReport={
    id:1,
    title:"Login failed",
    severity:"High",
    stepToReproduce:["step1","step2"]

}

const bugReport2:BugReport={
    id:1,
    title:"Footer text not matched",
    severity:"Low",
    stepToReproduce:["step1","step2"]
}

console.log(bugReport1.id+ " "+bugReport1.title)