import React, {Component} from "react";
import { createPortal } from "react-dom";
import {Backdrop, Content} from './modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount () {

     window.addEventListener('keydown', e => {

          if(e.code === 'Escape') {
               console.log("Modal  componentDidMount  e.code:", e.code)
               this.props.onClose();
          }
     });
  };

  componentDidUpdate () {
     console.log(' Modal componentDidUpdate');
  };
     render () {
          return createPortal(
              <Backdrop>
                 <Content>{this.props.children}</Content>
              </Backdrop>,
              modalRoot,
          );
     };
};

export default Modal;