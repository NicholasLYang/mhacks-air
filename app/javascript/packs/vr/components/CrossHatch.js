import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import BaseComponent from './BaseComponent.js';


class CrossHatch extends BaseComponent {


    render() {
        return (
            <Entity>
                <Entity primitive="a-cylinder"
            position={this.translate(this.props, [1.35, 5, 0.75])}
            rotation="45 0 0"
            geometry="radius: 0.05" />
                <Entity primitive="a-cylinder"
            position={this.translate(this.props, [0.65, 5, 0.75])}
            rotation="135 0 0"
            geometry="radius: 0.05" />
                </Entity>
        );
    }
}

export default CrossHatch;
