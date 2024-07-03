import { useState, useEffect } from 'react';
import bubbleSort from '../utils/bubbleSort';
import selectionSort from '../utils/selectionSort';
import insertionSort from '../utils/insertionSort';
import mergeSort from '../utils/mergeSort';
import heapSort from '../utils/heapSort';
import quickSort from '../utils/quickSort';

const Visualizer = () => {
  const [array, setArray] = useState([]);

  const arrayRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const generateArray = () => {
    const newArray = [];
    for (let i = 0; i < 75; i++) {
      newArray.push(arrayRandom(1, 800));
    }
    setArray(newArray);
  };

  useEffect(() => {
    generateArray();
  }, []);

  const handleSort = sort => {
    const sortedArray = sort([...array]);

    setArray(sortedArray);
  };

  return (
    <>
      <div className="array-container">
        <div className="array-list">
          {array.map((value, index) => (
            <div
              key={index}
              className="array-block"
              style={{ height: `${value}px` }}
            ></div>
          ))}
        </div>
      </div>
      <button onClick={generateArray}>Generate</button>
      <button onClick={() => handleSort(bubbleSort)}>Bubble Sort</button>
      <button onClick={() => handleSort(selectionSort)}>Selection Sort</button>
      <button onClick={() => handleSort(insertionSort)}>Insertion Sort</button>
      <button onClick={() => handleSort(heapSort)}>Heap Sort</button>
      <button onClick={() => handleSort(mergeSort)}>Merge Sort</button>
      <button onClick={() => handleSort(quickSort)}>Quick Sort</button>
    </>
  );
};

export default Visualizer;
