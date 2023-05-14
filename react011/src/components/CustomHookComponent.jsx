import React from "react";
import useWindowResize from "./useWindowResize";

function CustomHookComponent(){
    const smallScreen = useWindowResize(768);
    return(
        <div>
            <h4>The Browser is on {smallScreen?<span style={{color: 'red'}}>small</span>:<span style={{color: 'green'}}>large</span>} device</h4>
        </div>
    );
}
export default CustomHookComponent;