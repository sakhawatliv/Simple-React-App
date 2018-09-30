import React, {Component} from 'react';


class Counter extends Component{
    state = {
        count:0
    };
    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <span>Zero</span>
                <button className="btn btn-primary">Increment</button>
            </div>
        ); 
        
        
    }
}



export default Counter; 