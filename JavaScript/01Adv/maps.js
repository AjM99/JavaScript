 let anuj =
 {
     name: 'anuj',
     job : 'Ceo',
     status: 'active'
 }

 let luffy =
 {
     name: 'l',
     job : 'pirate',
     status: 'active'
 }

 let naruto =
 {
     name: 'naruto',
     job : 'shinobi',
     status: 'deactive'
 }

 let user =  new Map()

 user.set('anuj',anuj)      // this command turns it into a map
 user.set('luffy',luffy)
 user.set('naruto',naruto)
 
 console.log(user)
 console.log(user.size)     // such things makes maps better than  objects
 console.log(user.get('anuj'))

 //FOR OF