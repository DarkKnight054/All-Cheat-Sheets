import React from "react";

function Title(){
    console.log('Title component is re-rendering');
    return(
        <div>
            <h1>useCallback and useMemo Tutorial</h1>
        </div>
    );
}
export default React.memo(Title);