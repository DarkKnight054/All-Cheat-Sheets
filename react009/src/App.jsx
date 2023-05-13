import { useCallback, useMemo, useState } from "react";
import "./App.css";  
import Title from "./components/Title";
import ShowCounter from "./components/ShowCounter";
import Button from "./components/Button";
function App() {

  const [count1,setCount1] = useState(0);
  const [count2,setCount2] = useState(0);

  const IncrementByOne = useCallback(()=>{
    setCount1((prevCount)=>prevCount+1);
  },[]);
  const IncrementByFive = useCallback(()=>{
    setCount2((prevCount)=>prevCount+5);
  },[]);
  const isEvenOdd = useMemo(()=>{
    let i = 0;
    while(i<10000000000) i +=1;
    return count1 % 2 === 0;
  },[count1]);
  return (
    <div className="App">
      <Title />
      <ShowCounter count = {count1} title = "Element 1" />
      <div>
        {isEvenOdd?'Even':'Odd'}
      </div>
      <Button handleClick={IncrementByOne} title="Increment by one" />
      <hr />
      <ShowCounter count = {count2} title = "Element 2" />
      <Button handleClick={IncrementByFive} title="Increment by five" />
    </div>
  );
}

export default App;
