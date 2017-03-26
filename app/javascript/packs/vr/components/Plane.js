import 'aframe';
import 'aframe-animation-component';
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
            animation__descend="dir: normal; dur: 5000; from: 0 9 0; property: position; startEvents: start; to: 0 0 0"
            animation__hold="dir: alternate; dur: 10000; easing: easeInOutCirc; from: 100 9 0; property: position; startEvents: hold; loop: true; to: 0 9 0">

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

componentDidMount() {
        //Event Listeners
        $(window).keypress(function(e) {
            //s
            if (e.which === 115) {
                document.querySelector('#plane').emit('start');
            };
            //h
            if (e.which === 104) {
                document.querySelector('#plane').emit('hold');
            };
            //t
            if (e.which === 116) {
                document.querySelector('#plane').emit('taxi');
            };
        });
    }
}


export default Plane;
