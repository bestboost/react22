import React from 'react';
import Controls from './Controls';
import {CounterBox, Value} from './Counter.styled';

class Counter extends React.Component {
  static defaultProps = {
     initialValue: 0,
  };

  static propTypes = {
// 
  }
  
   state = {
     value: this.props.initialValue,
  }         
          
handleIncrement = () => {
   this.setState(prevState => ({
     value: prevState.value + 1,
  }));       
     };

handleDecrement = () => {
     this.setState(prevState => ({
          value: prevState.value - 1,
       }));        
     };

     render () {
          return (
           <CounterBox>
               <Value>{this.state.value}</Value>
               <Controls 
               onIncrement={this.handleIncrement}
               onDecrement={this.handleDecrement}
               />         
           </CounterBox>
          );
     };
}

export default Counter;