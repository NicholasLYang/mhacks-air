import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import BaseComponent from './BaseComponent.js';


class Window extends BaseComponent {

    render() {
        var trans = this.props.t.split(",");
        return (
                <Entity position={this.translate(this.props, trans)}
            scale={this.props.scale}
            rotation={this.props.rotation}
            color={this.props.color}
            geometry="mergeTo:null;primitive:plane"
            material={"side:double;opacity:0.5;color:" + color + ";normalScale:{&quot;x&quot;:1,&quot;y&quot;:1}"}
            id={this.props.id} />
        );
    }
}

export default Window;
