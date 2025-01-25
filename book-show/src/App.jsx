import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
  <div className="flex items-center justify-center">
    <div className="h-96 w-56 bg-gray-700 flex items-center rounded-xl justify-start flex-col space-y-5 p-5">
      <div className="h-30 w-30 bg-amber-100 rounded-full">
        <img src="" alt="" />
      </div>

      <div className="flex text-xl flex-col space-y-3">
        <h2>Title : Road to alpha male</h2>
        <h2>rating : 4.5</h2>
        <h2>Author : Divyam Khanna</h2>
      </div>
      
    </div>
  </div>
  )
}

export default App;
