import React from 'react';
import ReactDOM from 'react-dom';
import VRScene from './VRScene';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    render() {
        return <VRScene onKeyPress={this.handleKeyPress}/>
    }

    handleKeyPress(event) {
        console.log(event);
        var charCode = event.keyCode;
        if (charCode === 104){
            this.setState({
                event: CustomEvent("start")
            });
        }
    }

}
export default App;
