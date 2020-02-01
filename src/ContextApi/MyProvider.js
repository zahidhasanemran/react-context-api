import React, { Component } from 'react';

const MyContext = React.createContext();

class MyProvider extends Component {
    constructor(){
        super();
        this.state = {
            name: 'Emran',
            age: 25,
            job: 'Developer'
        }
    }
    render() {
        return (
            <MyContext.Provider value={{state: this.state}}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

const MyConsumer = MyContext.Consumer;

export {MyProvider, MyContext, MyConsumer};