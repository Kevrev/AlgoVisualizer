const bubbleSort = async (array, setArray, setActiveIndex) => {
  // implement break logic to stop unnecessary passes on sorted arrays
  let n = array.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {

      setActiveIndex(j);
      await new Promise(resolve => setTimeout(resolve, 3));

      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = 
        [array[j + 1], array[j]];
        setArray([...array]);
      }
    }
  }
  setActiveIndex(null);
};

export default bubbleSort;