
import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import BaseComponent from './BaseComponent.js';
import CrossHatch from './CrossHatch';


class WingStructs extends BaseComponent {

    render() {
        return (
                <Entity>

                <Entity primitive="a-cylinder"
            position={this.translate(this.props, [1.35, 5, 7.75])}
            geometry="radius: 0.05" />

                <Entity primitive="a-cylinder"
            position={this.translate(this.props, [1.35, 5, -1.75])}
            geometry="radius: 0.05" />
                <Entity primitive="a-cylinder"
            position={this.translate(this.props, [0.65, 5, 7.75])}
            geometry="radius: 0.05" />

                <Entity primitive="a-cylinder"
            position={this.translate(this.props, [0.65, 5, -1.75])}
            geometry="radius: 0.05" />

                <CrossHatch position={this.props.position}/>

                <CrossHatch position={this.translate(this.props, [1, 0, 0])}/>

            </Entity>

        );
    }

}

export default WingStructs;

