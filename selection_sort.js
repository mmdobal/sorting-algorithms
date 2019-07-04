/*
Selection sort loops over positions in the array.
For each position, it finds the index of the minimum value in the subarray
starting at that position.
Then it swaps the values at the position and at the minimum index.
*/

let swap = (array, firstIndex, secondIndex) => {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

let indexOfMinimum = (array, startIndex) => {
  let minValue = array[startIndex];
  let minIndex = startIndex;
  for (let i = minIndex + 1; i < array.length; i += 1) {
    if (array[i] < minValue) {
      minIndex = i;
      minValue = array[i];
    }
  }
  return minIndex;
};

let selectionSort = (array) => {
  let min;
  for (let i = 0; i < array.length; i += 1) {
    min = indexOfMinimum(array, i);
    swap(array, min, i);
  }
  return array;
};
