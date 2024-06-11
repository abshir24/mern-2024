import React from 'react';

class Class extends React.Component{
    constructor(props){
        this.state = {
            counter:1
        }
    }

    render(){
        return (
            <div>
                <button>Click me</button>
            </div>
        )
    }
}