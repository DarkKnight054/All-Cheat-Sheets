# React Event Handling & Control Re-rendering

- Arrow function doesnot change the <b>domain of <u>this</u></b> just like normal function.Thats why arrow function comes into the context.
- While a parent component is updates all other other components which ancestor is that parent component will be updated.

## Control Re-remdering 

- Class component can control re-rendering using <b>shouldComponentUpdate</b> method.

<b>N.B: But Re-rendering problem of an component shouldn't be done untill the component is huge</b>