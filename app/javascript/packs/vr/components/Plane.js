import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import Wheel from './Wheel';
import Body from './Body';
import Wing from './Wing';
import BaseComponent from './BaseComponent.js';

class Plane extends BaseComponent {
    render() {

        return (
            <Entity id="plane"
            scale="11 11 11"
            animation="dir: normal;
            dur: 5000;
            from: -100 5 3;
            property: position;
            startEvents: start;
            pauseEvents: pause;
            resumeEvents: 0;
            restartEvents: 0; to: 0 5 3"
            animation__descend="dir: normal;
            dur: 5000;
            from: 0 5 3;
            property: position;
            startEvents: animationcomplete;
            pauseEvents: pause;
            resumeEvents: 0;
            restartEvents: 0;
            to: 3 -3.95 3"
            animation__taxi="dir: normal;
            dur: 5000;
            from: 3 -3.95 3;
            property: position;
            startEvents: taxi;
            pauseEvents: pause;
            resumeEvents: 0;
            restartEvents: 0;
            to: 100 -3.95 3">

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

            </Entity>
        )
    }
}

function move(event) {
    if(event.key == 'M'){
        document.querySelector('#plane').emit('start');
    }
}

function land(event) {
    if (event.key == 'L') {
        document.querySelector('#plane').emit('pause');
    }
}

function taxi(event) {
    if (event.key == 'T') {
        document.querySelector('#plane').emit('taxi');
    }
}

export default Plane;
