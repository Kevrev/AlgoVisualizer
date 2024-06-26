function Visualizer() {
  let array = [];
  const arraypush = (array) => {
    for (let i = 0; i < 100; i++) {
      array.push('test');
    }
    return array;
  };
  console.log(arraypush(array));

  const test = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

  return (
    <>
      <div className="array-container">
        {test.map((value, index) => (
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
