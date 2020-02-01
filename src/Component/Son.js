import React, { Component } from 'react';
import { MyConsumer } from '../ContextApi/MyProvider';

class Son extends Component {
    render() {
        return (
            <MyConsumer>
                {(contextVal) => (
                    <div>
                        <h2>Hello i'm {contextVal.state.name} </h2>
                        <p>He is {contextVal.state.age} year old </p>
                        <p>He is  {contextVal.state.job} </p>

                        <button onClick={contextVal.state.gorw}> Cake + </button>
                        
                    </div>
                )}
            </MyConsumer>
        );
    }
}

export default Son;