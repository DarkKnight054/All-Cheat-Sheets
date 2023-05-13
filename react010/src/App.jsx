import React, { useEffect, useReducer } from "react";
import "./App.css";
import ComponentA from "./components/useContext/ComponentA";

export const counterContext = React.createContext();
let initialState = {
  count: 0,
};
let intialPost = {
  title: "",
  body: "",
  error: "",
}
const reducer = (state,action)=>{
  switch(action){
    case 'Increment': 
      return {count: state.count + 1};
    case 'Decrement':
      return {count: state.count - 1};
    default:
      return state;
  }
}

const reducer2 = (state,action)=>{
  console.log(action);
  switch(action.type){
    case 'Success' :
      return {...state, title: action.title, body: action.body};
    case 'Error':
      return {...state,error: action.error};
    default:
      return state;
  }
}

function App() {

  const[curState,dispatch] = useReducer(reducer,initialState);
  const[data,dispatch2] = useReducer(reducer2,intialPost);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/2')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json()})
      .then(json => {
        console.log(json);
        dispatch2({type: 'Success', title: json.title, body: json.body})}
        )
      .catch(
        (err)=>{
          dispatch2({type: 'Error', error: "There is some problem!"});
        }
      );
  },[]);

  return (
    <div className="App">
      <h2>useContext Hook & useReducer Hook</h2>
      <counterContext.Provider value={{count: curState.count, countDispatch: dispatch}}>
        <ComponentA />
      </counterContext.Provider>
      <hr />
      <h2>useEffect Hook & useReducer Hook</h2>
      <div>
        Post Title: {data.title}
        <hr/>
        Post Body: {data.body}
      </div>
      <div>
        {data.error || null}
      </div>
    </div>
  );
}

export default App;
