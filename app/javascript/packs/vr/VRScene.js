import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import Plane from './components/Plane';
import Window from './components/Window.js';
import Wall from './components/Wall.js';
import Tracks from './components/Tracks';

class VRScene extends React.Component {

    render () {

        return (
            <Scene>
            <Entity position="0 0 -7.40">


            <Window position="0 0 0" t="-34.64, 30.61, 110.09" />

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

            <Window position="0,0,0" t="-34.64, 30.61, 110.09"/>
            rotation="0 60 0"
            scale="39.03 30 56.11"
            id="left-window"/>

                <Window position="0 0 0" t="-34.78, 30.61, 110.09"
            rotation="0 60 0"
            scale="39 30 56.11"
            id="left-window"/>

                <Window position="0 0 0" t="-8, 30.61, 93.34"
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

                <Plane position="3 3 3" color="#FFF" id="plane" />

            <Entity primitive="a-camera"
            position="-8.27 31.6 116.44"
            rotation="0 0 0"
            camera="active:true;near:0.01;userHeight:1.6"
            look-controls="" wasd-controls="" />

                <Entity id="tracks" position="-153 0 23.39" scale="6 5.78 5.78">
                <Tracks />
                </Entity>    
                </Entity>
                </Scene>
        );

    }
}

export default VRScene;






