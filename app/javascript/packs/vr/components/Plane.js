import 'aframe';
import 'aframe-animation-component';
import 'aframe-alongpath-component';
import 'aframe-curve-component';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import Wheel from './Wheel';
import Body from './Body';
import Wing from './Wing';
import Props from './Props';
import BaseComponent from './BaseComponent.js';

class Plane extends BaseComponent {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.setState({position: this.props.position});
    }

    render() {
        return (
            <Entity>
            <Entity primitive="a-curve-point" position="0 0 70"/>
            {circling(40,40,30)}
            <Entity id = {this.props.id}
            alongpath="curve:#circle; trigger: ; loop:true; closed:false; inspect:true;">

            <Wing position={this.props.position}
            color={this.props.color}/>

            <Body position={this.props.position}
            color={this.props.color}/>

            <Wheel position={this.props.position}
            id="wheel-1"
            color={this.props.color}/>

            <Wheel position={this.props.position}
            id="wheel-2"
            color={this.props.color}/>

            </Entity>
            </Entity>
        );
    }

    componentDidMount() {
        //Event Listeners
        $(window).keypress(function(e) {
            //s
            if (e.which === 115) {
                document.querySelector('#plane').emit('start');
            };
            //h
            if (e.which === 104) {
                document.querySelector('#plane').emit('hold');
            };
            //t
            if (e.which === 116) {
                document.querySelector('#plane').emit('taxi');
            };
        });
    }
}

export default Plane;

var circling = function(x, z, r){
    var theta = 0;
    var cx = x + r;
    var cz = z;
    var step = 15.0 * (Math.PI/180);
    var curve_points = []
    for(theta; theta < 2 * Math.PI; theta += step){
        var x1 = cx + r * Math.cos(theta);
        var z1 = cz - r * Math.sin(theta);
        curve_points.push(
            <Entity primitive="a-curve-point"
            key={(theta)}
            id={"checkpoint-" + (theta).toString()}
            position={x1.toString() + ' 10 ' +  z1.toString()}
            geometry="primitive:box; height:0.1; width:0.1; depth:0.1"
            material="color:#ff0000"/>
        )
    }
    return(<Entity id="circle" primitive="a-curve"> {curve_points} </Entity>);
}

