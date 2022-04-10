
//TS recommend the use of interface over types when possible


//Describes data structures in a more natural way
//Describing objects
interface Person {
name: string
age: number
}


// type aliases
//To describe function types
//type Person = {
//  name: string
//  age: number
//}

type Data = string

export default function play() {
const name = "Quentin"
const age = 40

console.log("Hello world");

const person: Person = {
  name: "Jhon",
  age: 35
}


function logPersonInfo(personName: string, personAge: number) {
//const info = "Name: " + personName + ", Age: " + personAge
//Or with interpollation
const info = `Name: ${personName}, age: ${personAge}`



console.log(info)
return info
} 

function logPersonInfo2(person: Person) {
  //const info = "Name: " + personName + ", Age: " + personAge
  //Or with interpollation
  const info = `Name: ${person.name}, age: ${person.age}`
  
  console.log(person)
  return info
  } 

logPersonInfo(name, age)

logPersonInfo2(person)

}

