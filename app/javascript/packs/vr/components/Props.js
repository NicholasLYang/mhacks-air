import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import BaseComponent from './BaseComponent.js';

class Props extends BaseComponent {


    render() {
        return (
                <Entity>
                <Entity primitive="a-box"
            position={this.translate(this.props, [2.75, 5, 3])}
            rotation="135 5 0"
            scale="0.05 2 0.2"
                />
                <Entity primitive="a-box"
            position={this.translate(this.props, [2.75, 5, 3])}
            scale="0.05 2 0.2"
            rotation="45 5 0"
                />
                </Entity>
        );
    }
}

export default Props;
