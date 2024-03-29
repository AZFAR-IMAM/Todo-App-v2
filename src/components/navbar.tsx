import { NavLink } from "react-router-dom";

export default function Navbar() {
  //   const [searchParams] = useSearchParams();
  //   const todoData = searchParams.get("todos");
  //   const isActive = ()=>{
  //     if()
  //   }
  return (
    <nav>
      <NavLink to="/">All</NavLink>
      <NavLink to="/?todos=active">Active</NavLink>
      <NavLink to="/?todos=completed">Completed</NavLink>
    </nav>
  );
}
