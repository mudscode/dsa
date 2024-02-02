const arr1 = [1, 3, 4];
const arr2 = [2, 7, 9];

function mergeSortedArrays1(arr1, arr2) {
  if (typeof arr1 !== "object" || typeof arr2 !== "object") {
    return "These aren't the desired arrays.";
  }
  let result = [];
  result = arr1.concat(arr2).sort();
  return result;
}

function mergeSortedArrays2(arr1, arr2) {
  if (typeof arr1 !== "object" || typeof arr2 !== "object") {
    return "These aren't the desired arrays.";
  }
  return (result = [...arr1, ...arr2].sort());
}

function mergeSortedArraysEfficient(arr1, arr2) {
  if (!Array.isArray(arr1) || arr1.length < 0) {
    return "Something wrong with the input";
  }
  if (!Array.isArray(arr2) || arr1.length < 0) {
    return "Something wrong with the input";
  }

  const sortedArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArray.push(arr1[i]);
      i++;
    } else {
      sortedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    sortedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    sortedArray.push(arr2[j]);
    j++;
  }

  return sortedArray;
}

mergeSortedArraysEfficient(arr1, arr2);
