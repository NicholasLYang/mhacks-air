import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

class Wing extends React.Component {
    constructor(props) {
        super(props);
        AFRAME.registerGeometry('triangle', {
            schema: {
                vertices: {
                    default: ['-3 5 3', '0 5 5', '0 5 1'],
                }
            },
            init: function (data) {
                var geometry = new THREE.Geometry();
                geometry.vertices.push.call(
                    geometry.vertices,
                    data.vertices.map(function (vertex) {
                        var points = vertex.split(' ').map(parseInt);
                        return new THREE.Vector3(points[0], points[1], points[2]);
                    })
                );
                geometry.faces.push(new THREE.Face3(0, 1, 2));
                this.geometry = geometry;
            }
        });
    }

    render() {
        return (
                <Entity geometry="primitive: triangle"
            id="triangle"/>
        );
    }
}

export default Wing;
