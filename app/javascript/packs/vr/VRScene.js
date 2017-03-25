import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import Plane from './components/Plane';

class VRScene extends React.Component {

    render () {
        return (
            <Scene>

            <Entity position="0 0 -7.40">

            <Entity primitive='a-box'
            position="0 0 -14"
            scale="170 1.00 30.36"
            width="1"
            height="0.1"
            depth="1"
            color="#4CC3D9"
            material="color:#59aa4a"
            geometry="mergeTo:null;height:0.1"
            id="grass" />

            <Entity primitive='a-box'
            position="0 0 14"
            scale="170 1 25.66"
            width="1"
            height="0.1"
            depth="1"
            color="#4CC3D9"
            material="color:#b0b7b3"
            geometry="mergeTo:null;height:0.1"
            id="road" />

            <Entity
            position="-3 1 5"
            scale="1 2 4"
            id="building"
            geometry="mergeTo:null"
            material="color:#9bb6ff;normalScale:{&quot;x&quot;:1,&quot;y&quot;:1}" />

            <Entity primitive='a-sky'
            color="#ECECEC"
            position=""
            scale=""
            material="shader:flat;color:#82c4ec"
            geometry="mergeTo:null;primitive:sphere;radius:5000;segmentsHeight:20;segmentsWidth:64" />

            <Entity id="yellow-tracks" position="-30 0.06 2" rotation="90 0 0" scale="1 .4 1" />

            <Plane />

            <Entity primitive="a-camera"
            position="-0.10 3.19 10.25"
            rotation="-14.90 -0.11 0"
            camera="active:false;near:0.01;userHeight:1.6"
            look-controls="" wasd-controls="" />

            </Entity>
            </Scene>
        );
    }
}

export default VRScene;
