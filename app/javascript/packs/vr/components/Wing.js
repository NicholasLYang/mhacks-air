import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import BaseComponent from './BaseComponent.js';

class Wing extends BaseComponent {

    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
    }

    render() {
        return (
            <Entity
            position={this.translate(this.props,[0,5,3])}
            rotation="90 0 0"
            scale="1 10 1"
            id="plane-wings"
            geometry="mergeTo:null;depth:0.1"
            material="side:double;color:#0d4cff;normalScale:{&quot;x&quot;:null}"/>
        );
    };

};

export default Wing;
