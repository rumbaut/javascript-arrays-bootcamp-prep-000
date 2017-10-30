function chocolateBars(){
  return ['snickers', 'hundred grand', 'kitkat', 'skittles'];
}
function addElementToBeginningOfArray(array,element){
    var aux = array;
    aux.unshift(element);
    return aux;
}

var array = [];
console.log(addElementToBeginningOfArray(array,'foo')[0]);
console.log(array);
/*function destructivelyAddElementToBeginningOfArray(array, element){
  var newArray = array;
  newArray.unshift(element);
  return newArray;
}
*/
