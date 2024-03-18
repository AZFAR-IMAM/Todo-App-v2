import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import Navbar from "./components/navbar";
import "./App.css";
import { LuListTodo } from "react-icons/lu";
import { BiColorFill } from "react-icons/bi";
function App() {
  return (
    <main className="container">
      <h1>
        <LuListTodo color="green" style={{ marginRight: "40px" }} />
        TODO REACT + TYPESCRIPT
      </h1>
      <Navbar />
      <AddTodo />
      <Todos />
    </main>
  );
}

export default App;
