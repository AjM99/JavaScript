let mytodo ={
    day:'monday',
    meetings :0,           // OBJECT NOT WORKING PROPERLY
}

let task = function(num)
{
    this.meetings = this.meetings + num
    console.log(this.meetings)
    
}
task(4)
console.log(task(mytodo))