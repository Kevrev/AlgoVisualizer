import { useState, useEffect } from 'react';

const Visualizer = () => {
  const [array, setArray] = useState([]);

  const arrayRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const arrayPush = () => {
    const newArray = [];
    for (let i = 0; i < 75; i++) {
      newArray.push(arrayRandom(1, 800));
    }
    setArray(newArray);
  };

  useEffect(() => {
    arrayPush();
  }, []);

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
        <button onClick={arrayPush}>Generate</button>
    </>
  );
};

export default Visualizer;
