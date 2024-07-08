// const selectionSort = (array) => {
//   let n = array.length;
//   for (let i = 0; i < n - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < n; j++) {
//       if (array[j] < array[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex != i) {
//       [array[i], array[minIndex]] = [array[minIndex], array[i]];
//     }
//   }
//   return array;
// };

// export default selectionSort;


const selectionSort = async (array, setArray, setActiveIndex) => {
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {

      await new Promise(resolve => setTimeout(resolve, 3));
      
      if (array[j] < array[minIndex]) {
        minIndex = j;
        setActiveIndex(j);
      }
    }
    if (minIndex != i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
      setArray([...array]);
      setActiveIndex(i);
    }
  }
  setActiveIndex(null);
};

export default selectionSort;
