import React, { PureComponent } from 'react';
import {ColorPickerBox, Title, Box, Button} from './ColorPicker.styled'

class ColorPicker extends PureComponent {
  state ={
     activeOptionIdx: 0,
  };

  setActiveIdx = index => {
     this.setState({activeOptionIdx: index});
  };

     render () {
         const {label} = this.props.options[this.state.activeOptionIdx]; 
         const {options} = this.props; 
         return (
               <ColorPickerBox>
                   <Title>Color Picker</Title>
          
                 <Box>
                   {options.map(({label, color}, index) => ( 
                    <Button 
                       key={label}
                       style={{backgroundColor: color}}
                       onClick={() => this.setActiveIdx(index)}
                    ></Button>                               
                    ))} <p>Обраний колір: {label}</p> 
                 </Box>
               </ColorPickerBox>
          )
     };
};

export default ColorPicker;