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
        var commands = resolve('plane',200,200,50);
        return (
                <Entity>
                {circling(-100,-100,40)}
                <Entity id = {this.props.id} scale="5 5 5"
            animation__rotation={commands[0]}
            animation__gate={commands[1]}
            animation__taxi={commands[2]}
            animation__takeoff={commands[3]}>

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
            //l
            if (e.which === 108) {
                document.querySelector('#plane').emit('land');
            };
            //g
            if (e.which === 103) {
                document.querySelector('#plane').emit('gate');
            };
            //p
            if (e.which === 112) {
                document.querySelector('#plane').emit('pushback');
            };
            //t
            if (e.which === 116) {
                document.querySelector('#plane').emit('taxi');
            };
            //o
            if (e.which === 111) {
                document.querySelector('#plane').emit('takeoff');
            };
            //r
            if (e.which === 114) {
                document.querySelector('#plane').emit('replay');
            };
            //c
            if (e.which === 99){
                var data = $.ajax({
                    dataType: "json",
                    url: "/currentcommand",
                    data: data,
                    success: success
                });
                var obj = JSON.parse(data);
            };
        });
    }
}

export default Plane;

var resolve = function(p,x,y,z){
    var commands = [];
    if (x > 0){
        commands.push(
            "property: rotation; to: 0 180 0" //rotating
            ,"from: " + x.toString() + " y " + z.toString() + "; property: position; startEvents: gate; to: -63.8 -20.5 8.32"
            //gating
            ,"from: -63.8 -20.5 8.32; property: position; startEvents: taxi; to: 187.9 -20.5 0" //taxi
            ,"from: 187.9 -20.5 0; property: position; startEvents: takeoff; to: 400 400 90" //takeoff
        )
    }
    return commands
}

var circling = function(x, z, r){
    var theta = 0;
    var cx = x + r;
    var cz = z;
    var step = 15 * (Math.PI/180);
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
