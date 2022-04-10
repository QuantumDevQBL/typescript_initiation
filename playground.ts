
//TS recommend the use of interface over types when possible


//Describes data structures in a more natural way
//Describing objects
interface Person {
name: string
age: number
}


// interface PersonLoggerFn {
// (name: string, age: number): string 
// }

//type function
type PersonLoggerFn = (name:string, age: number) => string

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


const logPersonInfo: PersonLoggerFn = (personName: string, personAge: number): string => {
//const info = "Name: " + personName + ", Age: " + personAge
//Or with interpollation
const info = `Name: ${personName}, age: ${personAge}`
console.log(info)
return info
} 

const logPersonInfo2 = (person: Person) => {
  //const info = "Name: " + personName + ", Age: " + personAge
  //Or with interpollation
  const info = `Name: ${person.name}, age: ${person.age}`
  
  console.log(person)
  return info
  } 

const log: string = logPersonInfo(name, age)

logPersonInfo2(person)

logPersonInfo("Hello", 56)

}

