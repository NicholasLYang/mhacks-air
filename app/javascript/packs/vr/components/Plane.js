import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import Wheel from './Wheel';
import Body from './Body';
import Wing from './Wing';

class Plane extends React.Component {
    render() {

        return (
            /*
            <div>
                <input type="text" id="testing1" onKeyPress={this.move} />
                <input type="text" id="testing2" onKeyPress={this.land} />
                <input type="text" id="testing3" onKeyPress={this.taxi} />
            </div>
*/
            <Entity id="plane"
            animation="dir: normal; dur: 5000; from: -100 5 3; property: position; startEvents: start; pauseEvents: pause; resumeEvents: 0; restartEvents: 0; to: 0 5 3"
            animation__descend="dir: normal; dur: 5000; from: 0 5 3; property: position; startEvents: animationcomplete; pauseEvents: pause; resumeEvents: 0; restartEvents: 0; to: 3 -3.95 3"
            animation__taxi="dir: normal; dur: 5000; from: 3 -3.95 3; property: position; startEvents: taxi; pauseEvents: pause; resumeEvents: 0; restartEvents: 0; to: 100 -3.95 3">

            <Entity position="0 5 3"
            rotation="90 0 0"
            scale="1 10 1"
            id="plane-wings"
            geometry="mergeTo:null;depth:0.1"
            material="side:double;color:#7bea40;normalScale:{&quot;x&quot;:null}"/>

            <Wing />

            <Body />

            <Wheel position="-1.5 4.25 3" id="wheel-1" />

            <Wheel position="1.5 4.25 3" id="wheel-2" />

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
