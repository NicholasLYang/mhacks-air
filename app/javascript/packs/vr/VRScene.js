import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import Plane from './components/Plane';
import Tracks from './components/Tracks';

class VRScene extends React.Component {

    render () {

        return (
            <Scene>
            <Entity position="0 0 -7.40">

            <Entity primitive='a-entity'
            position="-30 .1 2.0"
            rotation="90 0 0"
            scale="1 .3 1"
            id="yellow-tracks" />

            <Entity primitive='a-box'
            position="0 0 0"
            rotation="0 0 0"
            scale="1 1 1"
            material="side:double;color:#f2ffaa;normalScale:{&quot;x&quot;:null}"
            geometry="mergeTo:null;primitive:plane;"
            id="track-0" />

            <Entity primitive='a-box'
            position="-145.15 .1 -21.53"
            rotation="270 0 0"
            scale="1200 336.21 34.93"
            material="color:#59aa4a;normalScale:{&quot;x&quot;:1,&quot;y&quot;:1}"
            geometry="mergeTo:null;primitive:plane;height:0.1;width:0.1"
            id="top-left-grass" />

            <Entity primitive='a-box'
            position="-.25 .1 -20.61"
            rotation="270 0 0"
            scale="872.39 336.21 34.93"
            material="color:#59aa4a;normalScale:{&quot;x&quot;:1,&quot;y&quot;:1}"
            geometry="mergeTo:null;primitive:plane;height:0.1;width:0.1"
            id="top-mid-grass" />

            <Entity primitive='a-box'
            position="144.76 .1 -21.53"
            rotation="270 0 0"
            scale="1200 336.21 34.93"
            material="color:#59aa4a;normalScale:{&quot;x&quot;:1,&quot;y&quot;:1}"
            geometry="mergeTo:null;primitive:plane;height:0.1;width:0.1"
            id="top-right-grass" />

            <Entity primitive='a-box'
            position="-.25 .1 72.25"
            rotation="270 0 0"
            scale="872.39 336.21 34.93"
            material="color:#59aa4a;normalScale:{&quot;x&quot;:1,&quot;y&quot;:1}"
            geometry="mergeTo:null;primitive:plane;height:0.1;width:0.1"
            id="bot-mid-grass" />

            <Entity primitive='a-box'
            position="145.15 .1 71.11"
            rotation="270 0 0"
            scale="1200 336.21 34.93"
            material="color:#59aa4a;normalScale:{&quot;x&quot;:1,&quot;y&quot;:1}"
            geometry="mergeTo:null;primitive:plane;height:0.1;width:0.1"
            id="grass-14" />

            <Entity primitive='a-box'
            position="-145.15 .1 71.11"
            rotation="270 0 0"
            scale="1200 336.21 34.93"
            material="color:#59aa4a;normalScale:{&quot;x&quot;:1,&quot;y&quot;:1}"
            geometry="mergeTo:null;primitive:plane;height:0.1;width:0.1"
            id="grass-13" />

            <Entity primitive='a-box'
            position="-102.37 .1 111.96"
            rotation="270 0 0"
            scale="348.21 481.27 34.93"
            material="color:#59aa4a;normalScale:{&quot;x&quot;:1,&quot;y&quot;:1}"
            geometry="mergeTo:null;primitive:plane;height:0.1;width:0.1"
            id="grass-12" />

            <Entity primitive='a-box'
            position="102.37 .1 111.96"
            rotation="270 0 0"
            scale="348.21 481.27 34.93"
            material="color:#59aa4a;normalScale:{&quot;x&quot;:1,&quot;y&quot;:1}"
            geometry="mergeTo:null;primitive:plane;height:0.1;width:0.1"
            id="grass-11" />


            <Entity primitive='a-box'
            position="0 0 14"
            scale="400 1 240"
            width="1"
            height="0.1"
            depth="1"
            color="#4CC3D9"
            material="color:#b0b7b3"
            geometry="mergeTo:null;height:0.1"
            id="road" />

            <Entity primitive='a-sky'
            color="#ECECEC"
            position=""
            scale="-1 1 1"
            material="shader:flat;color:#82c4ec"
            geometry="mergeTo:null;primitive:sphere;radius:5000;segmentsHeight:20;segmentsWidth:64" />

            <Entity id="yellow-tracks" position="-30 0.06 2" rotation="90 0 0" scale="1 .4 1" />

            <Plane />

            <Entity primitive="a-camera"
            position="-.1 31.6 116.44"
            rotation="0 0 0"
            camera="active:false;near:0.01;userHeight:1.6"
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
