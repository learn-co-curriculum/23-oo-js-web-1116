// function Dog(name, breed, numberOfLegs){
//   this.name = name
//   this.breed = breed
//   this.numberOfLegs = numberOfLegs
// }
//
// Dog.prototype.bark = function(){
//   return 'Woof!!!'
// }

class Dog {

  constructor(name, breed, numberOfLegs){
      this.name = name
      this.breed = breed
      this.numberOfLegs = numberOfLegs
  }

  bark(){
    return 'Woof!!'
  }
}
