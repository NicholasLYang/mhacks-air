import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

class BaseComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    translate(props, abs) {
        var position = props.position;
        var t = position.split(",");
        var sum = abs.map(function (num, i) {
            return parseFloat(num) + parseFloat(t[i]);
        });
        return sum.join(" ");
    }
}

export default BaseComponent;
