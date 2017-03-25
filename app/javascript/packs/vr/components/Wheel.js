import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import BaseComponent from './BaseComponent.js';


class Wheel extends BaseComponent {

    render() {
        return (
            <Entity>
                <Entity position={this.translate(this.props, [-1.5, 5, 3] )}
            rotation="90 0 0"
            scale=""
            geometry="mergeTo:null;primitive:cylinder;height:0.25;radius:0.2"
            material="color:#a5a5a5;normalScale:{&quot;x&quot;:1,&quot;y&quot;:1}"
            id={this.props.id} />

                <Entity position={this.translate(this.props, [1.5, 5, 3])}
            rotation="90 0 0"
            scale=""
            geometry="mergeTo:null;primitive:cylinder;height:0.25;radius:0.2"
            material="color:#a5a5a5;normalScale:{&quot;x&quot;:1,&quot;y&quot;:1}"
            id={this.props.id} />
            </Entity>
        );
    }

}

export default Wheel;
