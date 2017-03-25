import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

class VRScene extends React.Component {
    render () {
        return (
            <Scene>
            <Entity geometry={{primitive: 'cylinder'}}
            material="color: red" position={[0, 0, 0]}
            height="2"/>
            </Scene>
        );
    }
}

export default VRScene;
