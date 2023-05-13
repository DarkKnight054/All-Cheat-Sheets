import React from "react";
function ShowCounter({ count, title }){
    console.log(`${title} is rendering.........`);
    return(
        <div>
            <h3>{title} is {count}</h3>
        </div>
    );
}
export default React.memo(ShowCounter);