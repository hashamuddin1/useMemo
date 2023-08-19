import { useState, useMemo } from "react";

function App() {
  const [increment, setIncrement] = useState(0);
  const [multiply, setMultiply] = useState(2);
  const incrementFunc = () => {
    setIncrement(increment + 1);
  };
  const multiplyFunc = () => {
    setMultiply(multiply * 5);
  };

  const divideInc = () => {
    console.log("divide inc");
    return increment / 4;
  };

  const memoDivide = useMemo(divideInc, [increment]);
  return (
    <>
      <h3>{increment}</h3>
      <h3>{multiply}</h3>
      <h3>{memoDivide}</h3>
      <button onClick={incrementFunc}>Increment</button>
      <button onClick={multiplyFunc}>Multiply</button>
    </>
  );
}

export default App;
