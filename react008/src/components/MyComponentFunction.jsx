import { useEffect, useState } from "react";

function MyComponentFunction() {
    const [ date, setDate ] = useState(new Date().toLocaleTimeString('bn-BD'));
    const [count,setCount] = useState(0);
    
    const addClick = ()=>{
        setCount((count)=> count+1);
    }
    const tick = ()=>{
        console.log('tick');
        setDate(new Date().toLocaleTimeString('bn-BD'));
    }
    
    useEffect(()=>{
        document.title = `Clicked ${count} times`;
    },[count]);
    useEffect(()=>{
        const interval = setInterval(tick,1000);
        return ()=>{
            clearInterval(interval);
        }
    },[]);

    return (
    <div>
      <h3>Current Time : {date}</h3>
      <button type="button" onClick={addClick}>
        Click
      </button>
    </div>
  );
}
export default MyComponentFunction;
