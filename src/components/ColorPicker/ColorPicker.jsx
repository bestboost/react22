import React, { Component } from 'react';
import {ColorPickerBox, Title, Box, Button} from './ColorPicker.styled'

class ColorPicker extends Component {

     render () {
          return (
               <ColorPickerBox>
               <Title>Color Picker</Title>
               <Box>
                    <Button>

                    </Button>
               </Box>
               </ColorPickerBox>
          )
     };
};

export default ColorPicker;