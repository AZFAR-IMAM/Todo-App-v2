import { useState } from "react";
import { useTodos } from "../store/todos";

function AddTodo() {
  const [todo, setTodo] = useState("");
  const { handleAddTodo } = useTodos();

  const handelFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
    handleAddTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handelFormSubmit}>
      <input
        type="text"
        placeholder="Enter item"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;
