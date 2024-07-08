import { useState, useEffect } from 'react';
import bubbleSort from '../utils/bubbleSort';
import selectionSort from '../utils/selectionSort';
import insertionSort from '../utils/insertionSort';
import mergeSort from '../utils/mergeSort';
import heapSort from '../utils/heapSort';
import quickSort from '../utils/quickSort';

const Visualizer = () => {
  const [array, setArray] = useState([]);
  const [range, setRange] = useState(75);

  const arrayRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const generateArray = () => {
    const newArray = [];
    for (let i = 0; i < range; i++) {
      newArray.push(arrayRandom(1, 700));
    }
    setArray(newArray);
  };

  useEffect(() => {
    generateArray();
  }, [range]);

  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value);
    setRange(value);
  };

  // const handleSort = (sort) => {
  //   const sortedArray = sort([...array]);

  //   setArray(sortedArray);
  // };

  const handleSort = async (sort) => {
    const arrayCopy = [...array];
    await sort(arrayCopy, setArray);
  };

  return (
    <>
      <div className="interactives-container">
        <div className="left-container">
          <div className="slide-container">
            <input
              type="range"
              min="1"
              max="150"
              value={range}
              class="slider"
              id="myRange"
              onChange={handleSliderChange}
            />
            <div>{range} Blocks</div>
          </div>
        </div>
        <div className="button-container">
          <button onClick={generateArray}>Generate</button>
          {/* <button onClick={handleBubbleSort}>Bubble Sort</button>
        <button onClick={handleSelectionSort}>Selection Sort</button>
        <button onClick={handleInsertionSort}>Insertion Sort</button>
        <button onClick={handleMergeSort}>Merge Sort</button>
        <button onClick={handleHeapSort}>Heap Sort</button>
        <button onClick={handlequickSort}>Quick Sort</button> */}
          <button onClick={() => handleSort(bubbleSort)}>Bubble Sort</button>
          <button onClick={() => handleSort(selectionSort)}>
            Selection Sort
          </button>
          <button onClick={() => handleSort(insertionSort)}>
            Insertion Sort
          </button>
          <button onClick={() => handleSort(heapSort)}>Heap Sort</button>
          <button onClick={() => handleSort(mergeSort)}>Merge Sort</button>
          <button onClick={() => handleSort(quickSort)}>Quick Sort</button>
        </div>
      </div>
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
    </>
  );
};

export default Visualizer;
