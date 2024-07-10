import { useState, useEffect, useRef } from 'react';
import bubbleSort from '../utils/bubbleSort';
import selectionSort from '../utils/selectionSort';
import insertionSort from '../utils/insertionSort';
import mergeSort from '../utils/mergeSort';
import heapSort from '../utils/heapSort';
import quickSort from '../utils/quickSort';

const Visualizer = () => {
  const [array, setArray] = useState([]);
  const [range, setRange] = useState(75);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isSorting, setIsSorting] = useState(false);
  const breakSortingRef = useRef(false);

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
    setIsSorting(true);
    breakSortingRef.current = false;
    const arrayCopy = [...array];
    await sort(arrayCopy, setArray, setActiveIndex, breakSortingRef);
    setIsSorting(false);
  };

  const stopSorting = () => {
    breakSortingRef.current = true;
    setIsSorting(false);
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
              className="slider"
              id="myRange"
              onChange={handleSliderChange}
              disabled={isSorting}
            />
            <div>{range} Blocks</div>
          </div>
        </div>
        <div className="button-container">
          <button onClick={stopSorting} disabled={!isSorting} style={{}}>
            Stop Sort
          </button>
          <button onClick={generateArray} disabled={isSorting}>
            Generate
          </button>
          <button onClick={() => handleSort(bubbleSort)} disabled={isSorting}>
            Bubble Sort
          </button>
          <button
            onClick={() => handleSort(selectionSort)}
            disabled={isSorting}
          >
            Selection Sort
          </button>
          <button
            onClick={() => handleSort(insertionSort)}
            disabled={isSorting}
          >
            Insertion Sort
          </button>
          <button onClick={() => handleSort(heapSort)} disabled={isSorting}>
            Heap Sort
          </button>
          <button onClick={() => handleSort(mergeSort)} disabled={isSorting}>
            Merge Sort
          </button>
          <button onClick={() => handleSort(quickSort)} disabled={isSorting}>
            Quick Sort
          </button>
        </div>
      </div>
      <div className="array-container">
        <div className="array-list">
          {array.map((value, index) => (
            <div
              key={index}
              className="array-block"
              style={{
                height: `${value}px`,
                backgroundColor: activeIndex === index ? 'red' : '',
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Visualizer;
