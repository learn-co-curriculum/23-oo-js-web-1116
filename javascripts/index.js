var dog = new Dog('Fido', 'Terrier')
dog.name // 'Fido'
dog.breed // 'Terrier'

dog.bark() // 'Woof!'\

var puppy = new Puppy('Sparky', 'Dalmation', 4)
var blankPuppy = new Puppy()

puppy.name // 'Sparky'
puppy.breed // 'Dalmation'

puppy.bark() // 'Woof!'\

puppy.cute // true


function sayHello(greeting){
  console.log(this)
  console.log(arguments)
  return greeting
}

// DEMO PURPOSE ONLY
// function myNew(constructor) {
//   var obj = {}
//   obj.constructor = constructor
//      obj.constructor()
//   return obj
// }
