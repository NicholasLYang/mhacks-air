import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import BaseComponent from './BaseComponent.js';

class Tracks extends BaseComponent {

    render() {
        var tracks = [];
        const TRACKS_NUM = 40;
        for (var i=0; i< TRACKS_NUM; i++){
            tracks.push(
                <Entity

                    key={i}
                    position={(i*10).toString() + ' 0.06 0'}
                    rotation="90 0 0"
                    scale="7.3 2 0"
                    id={"track-" + i.toString()}
                    material='side:double; color:#f2ffaa; normalScale:NaN'
                    geometry='mergeTo:null;primitive:plane' />
            );
        }
        return(<Entity> {tracks} </Entity>);
    }
}
export default Tracks;
