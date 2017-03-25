import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

class Tracks extends React.Component {

    render() {
        var tracks = [];
        const TRACKS_NUM = 40;
        for (var i=0; i< TRACKS_NUM; i++){
            tracks.push(
                <Entity
                key={i}
                position={(i*1.5).toString() + ' 0 0'}
                scale=""
                id={"track-" + i.toString()}
                material="side:double;ambientOcclusionTextureRepeat:{&quot;x&quot;:0,&quot;y&quot;:1};color:#ffff00;normalScale:{&quot;x&quot;:null}"
                geometry='mergeTo:null:' />
                );
        }
        return(<Entity> {tracks} </Entity>);
    }
}
export default Tracks;
