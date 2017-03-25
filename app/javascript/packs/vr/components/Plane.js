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
                <Entity id="plane"
            dynamic-body constraint="target: #building">

            <Entity position="0 5 3"
        rotation="90 0 0"
        scale="1 3 1"
        id="plane-wings"
        geometry="mergeTo:null;primitive:plane"
        material="side:double;color:#ffadad;normalScale:{&quot;x&quot;:1,&quot;y&quot;:1}" />

                <Wing />

                <Body />

                <Wheel position="-1.5 4.25 3" id="wheel-1" />

                <Wheel position="1.5 4.25 3" id="wheel-2" />

                </Entity>)
    }
}

export default Plane;
