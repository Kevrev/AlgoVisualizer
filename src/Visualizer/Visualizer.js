function Visualizer() {
  let array = [];

  const arrayRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  const arraypush = (array) => {
    for (let i = 0; i < 75; i++) {
      array.push(arrayRandom(1, 800));
    }
    return array;
  };
  arraypush(array);

  return (
    <>
      <div className="array-container">
        {array.map((value, index) => (
          <div
            key={index}
            className="array-block"
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
    </>
  );
}

export default Visualizer;
