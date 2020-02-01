import React, { Component } from 'react';
import { MyConsumer } from '../ContextApi/MyProvider';

class Son extends Component {
    render() {
        return (
            <MyConsumer>
                {(contextVal) => (
                    <h2>Hello i'm {contextVal} </h2>
                )}
            </MyConsumer>
        );
    }
}

export default Son;