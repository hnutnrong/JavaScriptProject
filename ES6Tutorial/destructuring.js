//Destructuring Object

//แบบเดิม
var person ={
    name:'nutnarong',
    skill:'html css javascript'
}

// var name =person.name
// var skill = person.skill
// console.log(`name = ${name}, skill =${skill}`)


//แบบใหม่
var player={
    name : 'nutnarong',
    skill: 'java html css'
}

let {name,skill} = player
console.log(`name = ${name}, skill =${skill}`)