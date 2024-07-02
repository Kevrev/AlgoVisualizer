const heapSort = array => {
  const buildMaxHeap = array => {
    let n = array.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(array, n, i);
    }
  }
}

export default heapSort;