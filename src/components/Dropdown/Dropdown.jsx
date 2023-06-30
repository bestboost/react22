import React, { Component } from 'react';
import {DropdownBox, Menu, Button} from './Dropdown.styled';

class Dropdown extends Component {
  state = {
     visible: false,
  };

  toggle = () => {
     this.setState(prevState => ({
          visible: !prevState.visible, 
     }));
  };

     render() {
          return (
               <DropdownBox>
                    <Button type="button" onClick={this.toggle}>
                        {this.state.visible ? 'Сховати' : 'Показати' }
                    </Button>
                    {this.state.visible && (
                    <Menu>Випадаюче меню</Menu>)}                 
               </DropdownBox>
          )
     };
};

export default Dropdown;