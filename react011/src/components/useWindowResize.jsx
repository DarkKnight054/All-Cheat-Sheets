import React, {useState, useEffect, useCallback} from "react";
const useWindowResize = (screenSize)=>{
    const [smallScreen,setSmallScreen] = useState(false);
    
    const checkScreenSize = useCallback(()=>{
        if(window.innerWidth<screenSize)
        {
            setSmallScreen(true);
        }
        else setSmallScreen(false);
    },[]);

    useEffect(()=>{
        checkScreenSize();
        window.addEventListener('resize',checkScreenSize);
        return ()=>{
            window.removeEventListener('resize',checkScreenSize);
        }
    },[checkScreenSize]);
    return smallScreen;
}
export default useWindowResize;