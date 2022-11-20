import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setList] = useState([]);

  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    setList((currentArray) => [...currentArray, todo]);
    setTodo("");
  };

  console.log(todoList);
  return (
    <div>
      <h2>To do list</h2>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
