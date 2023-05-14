# React Hooks

## React useCallback Hook

- Remember the reference of function. In the below code, it remembers the reference of <u>increment</u> function. 
- `[]` means it remember the reference at very first render.
- <b>
    const IncrementByOne = useCallback(()=>{<br/>
    setCount1((prevCount)=>prevCount+1);<br/>
    },[]);<br/>
</b>

## React useMemo Hook

- Remember the value of function. In the below code, it remembers the value of <u>count1</u> in increment function. 
- `[count1]` means it'll re-render only when the <u>count1</u> changes.
- <b>
    const isEvenOdd = useMemo(()=>{<br/>
    let i = 0;<br/>
    while(i<10000000000) i +=1;<br/>
    return count1 % 2 === 0;<br/>
    },[count1]);<br/>

</b>

# Precaution of these hook

- Don't use these hooks often. Only preferred to use when the component is huge.
- Because these hooks are also costly.
