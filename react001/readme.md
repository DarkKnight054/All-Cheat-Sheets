# React JSX and Rendering Elements

- Every react element is a valid <b style="color : red">Javascript Object</b>
- Normally what we write inside the react element is stored as <b>Children</b> property of the Javascript object.
- If we write another element inside the parent element children element will be stored as a javascript object in children property 
of the parent object.
- React elements are <b style="color : red">immutable</b>.
- So, to change the element we've to make another react element. We can't update the previous react element.
- And, for updating the data inside an element react provides us stateful component named <span style="color: red">Functional Component</span>