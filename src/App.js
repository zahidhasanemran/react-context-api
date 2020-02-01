import React, { Component } from 'react';
import Family from './Component/Family';
import { MyProvider } from './ContextApi/MyProvider';

class App extends Component {
    
    render() {
        return (
           <MyProvider>
                <div>
                    <Family></Family>
                </div>
            </MyProvider>
        );
    }
}

export default App;