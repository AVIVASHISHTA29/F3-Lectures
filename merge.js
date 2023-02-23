function mergeSort(arr) {
  // [3,5,7,2] ----- [7,2]
  if (arr.length <= 1) {
    return arr;
  }

  const middleIndex = Math.floor(arr.length / 2);
  //   middleIndex = 2 ------ middleIndex = 1
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex);
  //   leftArr = [3,5] -------[7]
  //   rightArr = [7,2] ---------[2]
  const sortedLeftArr = mergeSort(leftArr);
  const sortedRightArr = mergeSort(rightArr);
  //   sortedLeftArr = [3,5]
  // sortedRightArr = [2,7]
  return mergeArr(sortedLeftArr, sortedRightArr);
}

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

console.log(mergeSort(arr));
