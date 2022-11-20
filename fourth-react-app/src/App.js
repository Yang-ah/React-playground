import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  function onClick() {
    setCounter((prev) => prev + 1);
  }
  console.log("I run all the time");

  const runOnlyOnce = () => console.log("I run only one time.");

  useEffect(runOnlyOnce, []);

  return (
    <div>
      <h1>Clicked {counter} times</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
