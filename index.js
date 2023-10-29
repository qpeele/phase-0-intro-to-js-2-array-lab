// Write your solution here!
let cats = ["Milo", "Otis","Garfield"]
function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}


function destructivelyRemoveLastCat(name){
    cats.pop(name)
}


function appendCat(name) {
    // Create a new array by concatenating the existing `cats` array with the new cat
    const newCats = cats.concat(name);
  
    // Return the new array
    return newCats;
  }
  function prependCat(name) {
    // Create a new array by concatenating the new cat with the existing `cats` array
    const newCats = [name, ...cats];
  
    // Return the new array
    return newCats;
  }


  function removeLastCat() {
    // Create a new array by slicing the `cats` array, excluding the last element
    const newCats = cats.slice(0, -1);
  
    // Return the new array
    return newCats;
  }
  
  function removeFirstCat() {
    // Create a new array by slicing the `cats` array, excluding the first element
    const newCats = cats.slice(1);
  
    // Return the new array
    return newCats;
  } 