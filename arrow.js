        // normal function
let n = function (name)              
{
    console.log('hey '+ name + ' fuk u')                 
}
n('anuj')                              
   

        // arrow function
let na = name => `hey ${name} fuk u`
 console.log(na('ansdfsunj'))       



 const todo = [
     {
         title:'apple',
         job:'bad'
     },
     {
        title:'banana',
        job:'bad'

     },
     {
        title:'ape',
        job:'good'

     }]

const check = todo.filter(todo=>            // after filter we arite the arrow fuction COMPLETELY not form the part aheadof arrow
{
    return todo.job === 'bad'
})

console.log(check)

