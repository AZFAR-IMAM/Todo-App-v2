import { useSearchParams } from "react-router-dom";
import { Todo, useTodos } from "../store/todos";

function Todos() {
  let { todos, toggelTodoAsCompleted, handelDeleteTodo } = useTodos();
  let filterData = todos;
  const [searchParams] = useSearchParams();
  const todoData = searchParams.get("todos");
  console.log("hereeeeeee", todoData);
  if (todoData === "active") {
    filterData = filterData.filter((task) => !task.completed);
  }
  if (todoData === "completed") {
    filterData = filterData.filter((task) => task.completed);
  }

  return (
    <ul className="main-task">
      {filterData.map((todo: Todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => toggelTodoAsCompleted(todo.id)}
            />
            {/* <label htmlFor={`todo-${todo.id}`}>{todo.task}</label> */}
            <p>{todo.task}</p>
            {todo.completed && (
              <button type="button" onClick={() => handelDeleteTodo(todo.id)}>
                Delete
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default Todos;
