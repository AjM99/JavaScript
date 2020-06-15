const data = 
{
    name: 'anuj',
    job: 'ceo',
    status : 'active'
}
// converyting object inot a string using Jason

const data2 = JSON.stringify(data)
console.log(data2)
console.log(typeof data2)
//localStorage.setItem('data',data2)      // local storage folder has it

