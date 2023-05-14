import React from "react";
function Button({handleClick, title}){
    console.log(`${title} is rendering.....`);
    return(
        <button type="button" onClick={handleClick}>
            {title}
        </button>
    );
}

export default React.memo(Button);