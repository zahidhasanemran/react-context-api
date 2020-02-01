import React, { Component } from 'react';
import Family from './Component/Family';

class App extends Component {

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
            <div>
                <Family kata={this.state.name}></Family>
            </div>
        );
    }
}

export default App;