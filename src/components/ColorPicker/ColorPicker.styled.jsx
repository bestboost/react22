import styled from "@emotion/styled";

export const ColorPickerBox = styled.div`
     width: 400px;
     padding: 10px;
     border: 1px solid black;
`; 
export const Title = styled.h2`
     line-height: 1.3;
`; 

export const Box = styled.div`

`; 

export const Button = styled.button`
     display: inline-block;
     width: 40px;
     height: 40px;
     margin: 4px;
     border: none;
     outline: none;
     cursor: pointer;
     transition: transform 250ms linear;

     :active {
          transform: scale(1.2);}  
`; 