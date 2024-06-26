function Visualizer() {
  const test = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

  return (
    <>
      <div className="array-container">
        {test.map((value, index) => (
          <div key={index} className="array-block" style={{height: `${value}px`}}>
            {/* <h1>{value}</h1> */}
          </div>
        ))}
      </div>
    </>
  );
}

export default Visualizer;
