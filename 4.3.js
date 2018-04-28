function arrayToList(array) {
  let list = null;
  for(let i = array.length - 1; i>=0; i--) {
    list = {
      value: array[i],
      rest: list
    };
  }
  return list;
}

function listToArray(list){
  let arr = [];
  while(list.rest){
     arr.push(list.value);
     list = list.rest;
   }
   arr.push(list.value);
   return arr;
}

function prepend(n, list) {
  let list1 = {
    value: n,
    rest: list
  }
  return list1;
}

function nth(list, n) {
  let arr1 = listToArray(list);
  return arr1[n];
}

/* recursive implementation of nth function

function nth(list, n) {
  if(!list){
    return undefined;
  }
  if(n == 0){
    return list.value;
  }
  return nth(list.rest, n-1);
}
*/

console.log(arrayToList([10,20,30]));

console.log(listToArray(arrayToList([10, 20, 30, 40])));

console.log(prepend(10, prepend(20, null)));

console.log(nth(arrayToList([1, 2, 3]), 1));