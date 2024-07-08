const bubbleSort = async (array, setArray) => {
  // implement break logic to stop unnecessary passes on sorted arrays
  let n = array.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = 
        [array[j + 1], array[j]];
        setArray([...array]);
        await new Promise(resolve => setTimeout(resolve, 3));
      }
    }
  }
 return array;
};

export default bubbleSort;