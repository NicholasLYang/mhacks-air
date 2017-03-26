import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import Wheel from './Wheel';
import Body from './Body';
import Wing from './Wing';
import Props from './Props';
import BaseComponent from './BaseComponent.js';

class Plane extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
                <Entity id = "plane"
            animation= {{dir: 'normal',
                         dur: '5000',
                         from: '-100 5 3',
                         property: 'position',
                         startEvents: 'start',
                         pauseEvents: 'pause',
                         resumeEvents: '0',
                         restartEvents: '0', to: '0 5 3'}}>

                <Wing position={this.props.position}
            color={this.props.color}/>

                <Body position={this.props.position}
            color={this.props.color}/>


                <Wheel position={this.props.position}
            id="wheel-1"
            color={this.props.color}/>

                <Wheel position={this.props.position}
            id="wheel-2"
            color={this.props.color} />

                <Props position={this.props.position} />

            </Entity>
        );
    }

}



export default Plane;
