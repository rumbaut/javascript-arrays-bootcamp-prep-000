function chocolateBars(){
  return ['snickers', 'hundred grand', 'kitkat', 'skittles'];
}
function addElementToBeginningOfArray(array,element){
    var aux = array;
    aux.unshift(element);
    return aux;
}
/*function destructivelyAddElementToBeginningOfArray(array, element){
  var newArray = array;
  newArray.unshift(element);
  return newArray;
}
*/
