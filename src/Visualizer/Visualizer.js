import { useState, useEffect } from 'react';
import bubbleSort from '../utils/bubbleSort';
import selectionSort from '../utils/selectionSort';
import insertionSort from '../utils/insertionSort';

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

  const handleBubbleSort = () => {
    const sortedArray = bubbleSort([...array]);

    setArray(sortedArray)
  };

  const handleSelectionSort = () => {
    const sortedArray = selectionSort([...array]);

    setArray(sortedArray)
  };

  const handleInsertionSort = () => {
    const sortedArray = insertionSort([...array]);

    setArray(sortedArray)
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
      <button onClick={handleBubbleSort}>Bubble Sort</button>
      <button onClick={handleSelectionSort}>Selection Sort</button>
      <button onClick={handleInsertionSort}>Insertion Sort</button>
    </>
  );
};

export default Visualizer;
