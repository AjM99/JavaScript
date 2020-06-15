let list = [1,2,3,4,5,6]

let sayhello = function()
{
    console.log('hi')
}
list.forEach(sayhello)



// alternate smart method for foreach
list.forEach(function()
{
    console.log('hi')
})// dont forget )