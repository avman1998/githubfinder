import Header from "./Header";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
