import React, { useContext } from "react";
import { counterContext } from "../../App";

function ComponentB(){
    const myContext = useContext(counterContext);
    return(
        <div>
            Count is {myContext.count}
            <br />
            <button type="button" onClick={()=>myContext.countDispatch('Increment')}>Increment</button>
            <button type="button" onClick={()=>myContext.countDispatch('Decrement')}>Decrement</button>
        </div>
    )
}
export default ComponentB;