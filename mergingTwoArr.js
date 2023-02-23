console.log("merging 2 arrays");

function mergeArr(arr1, arr2) {
  var i = 0;
  var j = 0;
  var arr3 = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      arr3.push(arr1[i]);
      i++;
    } else {
      arr3.push(arr2[j]);
      j++;
    }
  }
  if (i == arr1.length) {
    arr3 = arr3.concat(arr2.slice(j));
  } else {
    arr3 = arr3.concat(arr1.slice(i));
  }
  return arr3;
}

const myArr1 = [2, 5, 8, 10, 11];
const myArr2 = [3, 7, 9, 12, 13];

console.log("ARR1", myArr1);
console.log("ARR2", myArr2);

console.log("merging 2 arrays", mergeArr(myArr1, myArr2));
