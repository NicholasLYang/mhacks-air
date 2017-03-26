import 'aframe';
import 'aframe-animation-component';
import 'aframe-alongpath-component';
import 'aframe-curve-component';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import Wheel from './Wheel';
import Body from './Body';
import Wing from './Wing';
import BaseComponent from './BaseComponent.js';

class Plane extends BaseComponent {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.setState({position: this.props.position});
    }

    render() {
        return (
            <Entity>
            <Entity id="circle" primitive="a-curve">
            <Curve-Point position="-50 1 -3" geometry="primitive:box; height:0.1; width:0.1; depth:0.1" material="color:#ff0000" />
            <Curve-Point position="50 1 3" geometry="primitive:box; height:0.1; width:0.1; depth:0.1" material="color:#ff0000" />
            </Entity>
            <Draw-Curve curveref="#circle" material="shader: line; color: blue;"/>
            <Entity id = "plane"
            alongpath="path:circle; closed: false; dur: 5000; delay: 4000; startEvents: start">

            <Wing position={this.props.position}
            color={this.props.color} />

                <Body position={this.props.position}
            color={this.props.color}/>


                <Wheel position={this.props.position}
            id="wheel-1"
            color={this.props.color}/>

                <Wheel position={this.props.position}
            id="wheel-2"
            color={this.props.color} />

            </Entity>
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

var circle = function(curX, curY, r){
    
}

// Add an event listener
/*
document.onkeypress = function(evt){
    evt = evt;
    var charCode = evt.keyCode;
    if (charCode === 104){
        var event = new CustomEvent("start",{
            detail:{
                holding: true
            }
        });
        document.dispatchEvent(event);
        console.log("succeed");
    }
};
*/
export default Plane;
