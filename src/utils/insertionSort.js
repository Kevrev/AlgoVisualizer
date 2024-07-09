// const insertionSort = array => {
//   let n = array.length;
//   for (let i = 1; i < n; i++) {
//     let current = array[i];
//     let j = i - 1;
//     while (j >= 0 && array[j] > current) {
//       array[j + 1] = array[j];
//       j--;
//     }
//   array[j + 1] = current;
//   }
//   return array;
// }

// export default insertionSort;

const insertionSort = async (array, setArray, setActiveIndex) => {
  let n = array.length;
  for (let i = 1; i < n; i++) {
    let current = array[i];
    let j = i - 1;

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