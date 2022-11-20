import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((prev) => prev + 1);

  const onChange = (event) => setKeyword(event.target.value);

  console.log("I run all the time");

  const runOnlyOnce = () => console.log("I run only one time.");

  useEffect(runOnlyOnce, []);

  useEffect(() => {
    if (keyword !== keyword.length > 5) {
      console.log("Search for", keyword);
    }
  }, [keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search hear..."
      />
      <h1>Clicked {counter} times</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
