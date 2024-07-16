const insertionSort = async (array, setArray, setActiveIndex, breakSortingRef) => {
  let n = array.length;
  for (let i = 1; i < n; i++) {
    if (breakSortingRef.current) {
      setActiveIndex(null);
      return; 
    }

    let current = array[i];
    let j = i - 1;

    // TODO: Fix broken animation. Sorting algo is okay but visually clones last value when sorting [3, 2, 1] -> [2, 2, 3]
    while (j >= 0 && array[j] > current) {
      setActiveIndex(j);
      array[j + 1] = array[j];
      setArray([...array]);
      j--;
      await new Promise(resolve => setTimeout(resolve, 3));
    }
  array[j + 1] = current;
  }
  setActiveIndex(null);
}

export default insertionSort;