import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';


class Wheel extends React.Component {

    render() {
        return (
                <Entity position={this.props.position}
            rotation="90 0 0"
            scale=""
            geometry="mergeTo:null;primitive:cylinder;height:0.25;radius:0.25"
            material="color:#a5a5a5;normalScale:{&quot;x&quot;:1,&quot;y&quot;:1}"
            id={this.props.id} />
        );
    }

}

export default Wheel;
