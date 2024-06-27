import { useState, useEffect } from 'react';
import bubbleSort from '../utils/bubbleSort';

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
    const sortedArray = bubbleSort([...array]); // Create a copy of array to avoid mutating state
    setArray(sortedArray);
    console.log('Sorted Array:', sortedArray);
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
      <button onClick={handleBubbleSort}>Bubblesort console test</button>
    </>
  );
};

export default Visualizer;
