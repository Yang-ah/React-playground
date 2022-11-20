import { useState } from "react";

function App() {
  const [todo, addTodo] = useState("");

  const onChange = (e) => addTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    addTodo("");
  };

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
