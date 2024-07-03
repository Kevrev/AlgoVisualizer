const quickSort = array => {
  if (array.length <= 1) {
    return array;
  }

  const medianofThree = array => {
    const first = 0;
    const mid = Math.floor(array.length / 2);
    const last = array.length - 1;

    if (array[first] > array[mid]) {
      [array[first], array[mid]] = 
      [array[mid], array[first]];
    }
    if (array[first] > array[last]) {
      [array[first], array[last]] = 
      [array[last], array[first]];
    }
    if (array[mid] > array[last]) {
      [array[mid], array[last]] = 
      [array[last], array[mid]];
    }

    [array[mid], array[last]] = 
    [array[last], array[mid]];

    return array[last];
  }

  let pivot = medianofThree(array);
  let leftArray = [];
  let rightArray = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      leftArray.push(array[i]);
    } else {
      rightArray.push(array[i]);
    }
  }

  return quickSort(leftArray).concat(pivot).concat(quickSort(rightArray));
};

export default quickSort;