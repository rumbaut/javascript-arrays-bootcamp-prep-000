function chocolateBars(){
  return ['snickers', 'hundred grand', 'kitkat', 'skittles'];
}
function addElementToBeginningOfArray(array,element){
    var aux = array.slice();
    aux.unshift(element);

    return aux;
}


function destructivelyAddElementToBeginningOfArray(array, element){
  var newArray = array;
  newArray.unshift(element);
  return newArray;
}

function addElementToEndOfArray(array, element){}

var array = [];
console.log(addElementToBeginningOfArray(array,'foo')[0]);
console.log(array);
