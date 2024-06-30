const selectionSort = array => {
  let n = array.length
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
      [array[i], array[minIndex]] =
      [array[minIndex], array[i]]
    }
  }
  return array
};

export default selectionSort;