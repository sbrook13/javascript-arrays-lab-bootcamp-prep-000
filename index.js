var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name,b){
  name=[...name,b]
  var newKittens = name
  return newKittens
}