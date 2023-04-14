# React State & Lifecycle in Class Component

- State is <b>data of the react components</b> which is changeable.
- Render & other inherited methods are events of react class components.
- State can be updated by setState method of react component.
- If we wanna change the state of a react component after rendering then we have to change the state of that component in
<b>ComponentDidMount</b> method.
- State can be modified using only setState method. When a setState method invoke react understand that it has to re-render the component.


## Precautions

- we have to pass function into setState method. Because of batch update of states.
- state updates are merged.
- have to keep the states of a component immutable. So its a good havit to always makes a copy of the state before doing any kind of operation in the state of the component.

## Data flow of react

- React has uni data flow.
- Any props will be send from parent component to child component <b>never ever from child component to parent component</b>
