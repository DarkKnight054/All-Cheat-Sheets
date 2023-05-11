# React Hooks

## React useState Hook

- Can't update a single property of a object using set state method. Conventional way is given below: 

<b>
    const [todo, setTodo] = useState({
        task: 'Theses',
        copyright: 'CSE Dept.',
    })
    
    setTodo({
        ...todo,
        copyright: 'EEE Dept.',
    })
</b>

## React useEffect Hook

- It runs everytime the component renders ( including initial rendering).
- useEffect(()=>{},[count]) <br/>this indicates that useEffect will run when only the <b>'count'</b> vairable updated.
- useEffect(()=>{},[]) <br/>It runs only at the initial rendering (works like <b>ComponentDidMount</b> method in class).