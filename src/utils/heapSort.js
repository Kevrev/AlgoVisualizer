// const heapSort = (array) => {
//   const buildMaxHeap = (array) => {
//     let n = array.length;
//     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//       heapify(array, n, i);
//     }
//   };

//   const heapify = (array, n, i) => {
//     let largest = i;
//     let left = 2 * i + 1;
//     let right = 2 * i + 2;

//     if (left < n && array[left] > array[largest]) {
//       largest = left;
//     }

//     if (right < n && array[right] > array[largest]) {
//       largest = right;
//     }

//     if (largest !== i) {
//       [array[i], array[largest]] = [array[largest], array[i]];

//       heapify(array, n, largest);
//     }
//   };

//   const sort = (array) => {
//     let n = array.length;

//     buildMaxHeap(array);

//     for (let i = n - 1; i > 0; i--) {
//       [array[0], array[i]] = [array[i], array[0]];

//       heapify(array, i, 0);
//     }
//   };

//   sort(array);
//   return array;
// };

// export default heapSort;

const heapSort = async (array, setArray, setActiveIndex, breakSortingRef) => {
  const buildMaxHeap = (array) => {
    let n = array.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(array, n, i);
    }
  };

  const heapify = (array, n, i) => {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && array[left] > array[largest]) {
      largest = left;
    }

    if (right < n && array[right] > array[largest]) {
      largest = right;
    }

    if (largest !== i) {
      [array[i], array[largest]] = [array[largest], array[i]];

      heapify(array, n, largest);
    }
  };

  const sort = async (array) => {
    let n = array.length;

    buildMaxHeap(array);

    for (let i = n - 1; i > 0; i--) {
      if (breakSortingRef.current) {
        setActiveIndex(null);
        return; 
      }
      
      setActiveIndex(i);
      [array[0], array[i]] = [array[i], array[0]];
      heapify(array, i, 0);
      setArray([...array]);
      await new Promise(resolve => setTimeout(resolve, 25));
    }
    setActiveIndex(null);
  };

  sort(array);
};

export default heapSort;
