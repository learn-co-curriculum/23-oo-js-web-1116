// function Puppy (){
//   // here, I want to call the Dog's constructor function
//   // HOW???????/
//   Dog.apply(this, arguments)
//   this.cute = true
// }
//
// // My Puppy should have some connection to my dog's prototype
//
// Puppy.prototype = Object.create(Dog.prototype)
//
// Puppy.prototype.nip = function(){
//   return 'Sorry, I just want to play!!!!'
// }

class Puppy extends Dog {
  constructor(name, breed, numberOfLegs){
    super(name, breed, numberOfLegs) // Dog.constructor.apply(this, argument)
    this.cute = true
  }

  nip(){
    return 'Sorry, I just want to play!!'
  }

  bark(){
    return 'Yip!'
  }
}
