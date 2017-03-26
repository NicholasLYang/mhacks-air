import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import BaseComponent from './BaseComponent.js';
import WingStructs from './WingStructs';

class Wing extends BaseComponent {

    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
    }

    render() {
        return (
            <Entity>
            <Entity
            position={this.translate(this.props, [1, 4.6, 3])}
            rotation="90 0 0"
            scale="1 10 1"
            id="plane-wings"
            geometry="mergeTo:null;depth:0.1"
            material="side:double;color:#0d4cff;normalScale:{&quot;x&quot;:null}"/>
            <Entity
            position={this.translate(this.props, [1, 5.4, 3])}
            rotation="90 0 0"
            scale="1 10 1"
            id="plane-wings"
            geometry="mergeTo:null;depth:0.1"
            material="side:double;color:#0d4cff;normalScale:{&quot;x&quot;:null}"/>

                <Entity primitive="a-box"
            position={this.translate(this.props, [-2.5, 5.35, 3])}
            rotation="0 0 45"
            scale="1.5 1.5 0.1"
                />

                <WingStructs position={this.props.position} />
                </Entity>

        );
    };

};

export default Wing;
