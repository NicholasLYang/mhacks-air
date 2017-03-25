import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

class Body extends React.Component {
    render() {
        return (
            <Entity>
                <Entity primitive="a-cylinder"
            position="0 5 3"
            scale="1 5 1"
            rotation="0 0 90"
            geometry="mergeTo:null; radius: 0.75"
            material="color:#ff9120;normalScale:{&quot;x&quot;:1,&quot;y&quot;:1}"
            id="plane-hull" />

                <Entity primitive="a-sphere"
            position="2.5 5 3"
            geometry="radius: 0.75"
            material="color:#ff9120;normalScale:{&quot;x&quot;:1,&quot;y&quot;:1}" />

                <Entity primitive="a-cone"
            position="-3 5 3"
            rotation="0 0 90"
            geometry="radiusBottom: 0.75; radiusTop: 0.5"
            material="color:#ff9120;normalScale:{&quot;x&quot;:1,&quot;y&quot;:1}" />

            </Entity>
        );
    }

}

export default Body;
