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
          const {visible} = this.state;
          return (
               <DropdownBox>
                    <Button type="button" onClick={this.toggle}>
                        {visible ? 'Сховати' : 'Показати' }
                    </Button>
                    {visible && (
                    <Menu>Випадаюче меню</Menu>)}                 
               </DropdownBox>
          )
     };
};

export default Dropdown;