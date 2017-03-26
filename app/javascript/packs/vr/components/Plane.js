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
                <Entity id = "plane"
            animation= {{dir: 'normal', dur: '5000', from: '-100 5 3', property: 'position', startEvents: 'start', pauseEvents: 'pause', resumeEvents: '0', restartEvents: '0', to: '0 5 3'}}>
                
            
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
        );
    }
}

// Add an event listener
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

export default Plane;
