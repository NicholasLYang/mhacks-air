import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import Plane from './components/Plane';
import Window from './components/Window.js';
import Wall from './components/Wall.js';
import Tracks from './components/Tracks';
import Scenery from './components/Scenery';

class VRScene extends React.Component {

    render () {

        return (
            <Scene>
            <Entity position="0 0 -7.40">
                <Scenery />

                <Plane position="3 3 3" color="#6438EA"/>
                <Plane position="0 0 0" color="#6438EA"/>

            <Window position="0 0 0" t="-34.64, 30.61, 110.09"
            rotation="0 60 0"
            scale="39.03 30 56.11"
            id="left-window"/>

                <Window position="0 0 0" t="-8, 30.61, 93.01"
            rotation="0 0 0"
            scale="34 30 56.11"
            id="middle-window"/>

                <Window position="0 0 0" t="18.7,30.61,110.09"
            rotation="0 300 0"
            scale="39.03 30 56.11"
            id="right-window"/>

                <Wall position="0 0 0" t="-8.08,15.61,126.84"
            rotation="0 0 0"
            scale="73 60 100"
            id="back-wall"/>

                <Wall position="0 0 0" t="-7.42,45.39,109.29"
            rotation="90 0 0"
            scale="75.43 34.92 46.21"
            id="top-wall"/>

                <Wall position="0 0 0" t="-12,15.25,110.32"
            rotation="90 0 0"
            scale="75.43 34.92 46.21"
            id="bottom-wall"/>


            <Entity primitive="a-camera"
            position="-8.27 31.6 116.44"
            rotation="0 0 0"
            camera="active:true;near:0.01;userHeight:1.6"
            look-controls="" wasd-controls="" />

            <Tracks />

            </Entity>
            </Scene>
        );

    }
}

export default VRScene;

function makeTracks() {
    var tracks = document.getElementById('yellow-tracks');
     for (var i=0; i<40; i++){
         var track = document.createElement('a-entity');
         tracks.appendChild(track);
         track.setAttribute('position', (i*1.5).toString() + ' 0 0');
         track.setAttribute('id', "track-" + i.toString());
         track.setAttribute('material', 'side:double;color:#f2ffaa;normalScale:NaN');
         track.setAttribute('geometry','mergeTo:null;primitive:plane');
     }
}
