import React, {Component} from "react";
import {ClockFace} from './Clock.styled';

class Clock extends Component {
     state = {
          time: new Date()
     };

     intervalId = null;

     componentDidMount() {

        this.intervalId = setInterval(
               () => this.setState({time: new Date()}),
               1000,
          );
     };

     componentWillUnmount() {
       clearInterval(this.intervalId);
     }

     render () {
          return <ClockFace>{this.state.time.toLocaleTimeString()}</ClockFace>
     }

};

export default Clock;