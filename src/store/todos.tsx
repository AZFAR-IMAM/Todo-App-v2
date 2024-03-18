import { ReactNode, createContext, useContext, useState } from "react";

export const todosContext = createContext<TodoContext | null>(null);
export type TodosProviderProps = {
  children: ReactNode;
};
export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};
export type TodoContext = {
  todos: Todo[];
  handleAddTodo: (task: string) => void; // Corrected typo here
  toggelTodoAsCompleted: (id: string) => void;
  handelDeleteTodo: (id: string) => void;
};

export const TodoProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAddTodo = (task: string) => {
    // Corrected function name here
    setTodos((prev) => {
      const newTodo: Todo[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      console.log("my prev", prev);
      console.log(newTodo);

      return newTodo;
    });
  };

  // const toggelTodoAsCompleted = (id: string) => {
  //   setTodos((prev) => {
  //     const newTodo = prev.map((todo) => {
  //       if (todo.id === id) {
  //         return { ...prev, completed: !todo.completed };
  //       }
  //       // return todo;
  //     });
  //     return newTodo;
  //   });
  // };
  const toggelTodoAsCompleted = (id: string) => {
    setTodos((prev) => {
      let newTodos = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };
  const handelDeleteTodo = (id: string) => {
    {
      const FilterTodos = todos.filter((todo) => todo.id !== id);
      setTodos(FilterTodos);
    }
  };
  // Return the context provider wrapping the children
  return (
    <todosContext.Provider
      value={{ todos, handleAddTodo, toggelTodoAsCompleted, handelDeleteTodo }}
    >
      {children}
    </todosContext.Provider>
  );
};

export const useTodos = () => {
  const todosConsumer = useContext(todosContext);
  return todosConsumer;
};
