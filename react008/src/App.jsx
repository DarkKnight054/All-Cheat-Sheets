import { useState } from "react";
import "./App.css";
import MyComponentFunction from "./components/MyComponentFunction";
function App() {

  const [show,setShow] = useState(true);

  const handleClick= ()=>{
    setShow(!show);
  }

  return (
    <div className="App">
      {show && <MyComponentFunction />}
      <button type="button" onClick={handleClick}>{show?'Hide Post':'Show Post'}</button>
    </div>
  );
}

export default App;
