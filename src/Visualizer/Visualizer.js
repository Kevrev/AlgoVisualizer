import { useState, useEffect, useRef } from 'react';
import { MDBRange, MDBBtn } from 'mdb-react-ui-kit';
import bubbleSort from '../utils/bubbleSort';
import selectionSort from '../utils/selectionSort';
import insertionSort from '../utils/insertionSort';
import heapSort from '../utils/heapSort';
import mergeSort from '../utils/mergeSort';
import quickSort from '../utils/quickSort';

const Visualizer = () => {
  const [array, setArray] = useState([]);
  const [range, setRange] = useState(85);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isSorting, setIsSorting] = useState(false);
  const [selectedSort, setSelectedSort] = useState('');
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

  const handleSort = async (sort, sortName) => {
    setSelectedSort(sortName);
    setIsSorting(true);
    breakSortingRef.current = false;
    const arrayCopy = [...array];
    await sort(arrayCopy, setArray, setActiveIndex, breakSortingRef);
    setIsSorting(false);
    setSelectedSort('');
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
            <MDBRange
              disableTooltip
              type="range"
              min="10"
              max="160"
              value={range}
              className="slider"
              id="myRange"
              onChange={handleSliderChange}
              disabled={isSorting}
            />
            <div className='slider-text'>{range} Blocks</div>
          </div>
        </div>
        <div className="button-container">
          <div className="regen-stop-container">
            <MDBBtn
              className="text-dark custom-btn"
              color="warning"
              onClick={generateArray}
              disabled={isSorting}
            >
              Regenerate
            </MDBBtn>
            <MDBBtn
              className="custom-btn"
              color="danger"
              onClick={stopSorting}
              disabled={!isSorting}
            >
              Stop Sorting
            </MDBBtn>
          </div>
          <div className="sort-container">
            <MDBBtn
              className="text-dark custom-btn"
              color="light"
              onClick={() => handleSort(bubbleSort, 'Bubble Sort')}
              disabled={isSorting}
            >
              Bubble Sort
            </MDBBtn>
            <MDBBtn
              className="text-dark custom-btn"
              color="light"
              onClick={() => handleSort(selectionSort, 'Selection Sort')}
              disabled={isSorting}
            >
              Selection Sort
            </MDBBtn>
            <MDBBtn
              className="text-dark custom-btn"
              color="light"
              onClick={() => handleSort(insertionSort, 'Insertion Sort')}
              disabled={isSorting}
            >
              Insertion Sort
            </MDBBtn>
            <MDBBtn
              className="text-dark custom-btn"
              color="light"
              onClick={() => handleSort(heapSort, 'Heap Sort')}
              disabled={isSorting}
            >
              Heap Sort
            </MDBBtn>
            <MDBBtn
              className="text-dark custom-btn"
              color="light"
              onClick={() => handleSort(mergeSort, 'Merge Sort')}
              disabled={isSorting}
            >
              Merge Sort
            </MDBBtn>
            <MDBBtn
              className="text-dark custom-btn"
              color="light"
              onClick={() => handleSort(quickSort, 'Quick Sort')}
              disabled={isSorting}
            >
              Quick Sort
            </MDBBtn>
          </div>
        </div>
      </div>
      <div className="selected-sort">
        <div>{isSorting && <p className="sort-banner">{selectedSort}</p>}</div>
      </div>
      <div className="array-container">
        <div className="array-list">
          {array.map((value, index) => (
            <div
              key={index}
              className="array-block"
              style={{
                height: `${value}px`,
                backgroundColor:
                  activeIndex === index ? 'rgb(240, 70, 70)' : '',
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Visualizer;
