import React, { Component } from 'react';
import Son from './Son';

class Family extends Component {
    render() {
        return (
            <div>
                <Son nata={this.props.kata}></Son>
            </div>
        );
    }
}

export default Family;