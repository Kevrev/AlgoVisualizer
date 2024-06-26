function Visualizer() {
  const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {test.map((value, index) => (
        <div key={index}>
          <h1>{value}</h1>
        </div>
      ))}
    </>
  );
}

export default Visualizer;
