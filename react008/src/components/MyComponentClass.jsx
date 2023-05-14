import React from "react";


class MyComponentClass extends React.Component {
    state = {
        count : 0,
        time: new Date().toLocaleTimeString('bn-BD'),
    }
    addClick = ()=>{
        this.setState(({ count })=>({ count: count +1 }));
    }
    componentDidMount(){
        const { count } = this.state;
        document.title = `Clicked ${count} times`;
        this.clockTimer = setInterval(this.tick,1000);
    }
    componentDidUpdate(){
        const { count } = this.state;
        document.title = `Clicked ${count} times`;
    }
    componentWillUnmount()
    {
        clearInterval(this.clockTimer);
    }
    tick = ()=>{
        this.setState(()=>({time: new Date().toLocaleTimeString('bn-BD')}));
    }
    render()
    {
        const { time } = this.state;
        const addClick = this.addClick;
        return(
            <div>
                <h3>Current Time : {time}</h3>
                <button type="button" onClick={addClick}>Click</button>
            </div>
        )
    }
}

export default MyComponentClass;