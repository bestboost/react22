import React, {Component} from "react";
import {TodoEditorForm, Textarea, Saved} from './TodoEditor.styled';

class TodoEditor extends Component {
  state = {
     message: '',
  };

  handleChange = e => {
     console.log("TodoEditor  e.currentTarget.value:", e.currentTarget.value)
  };

  handleSubmit = e => {
     e.preventDefault();

     this.props.onSubmit(this.state.message);

     this.setState({message: ''});
  }

  render () {
     return (
          <TodoEditorForm onSubmit={this.handleSubmit}>
               <Textarea
               value={this.state.message}
               onChange={this.handleChange}
               ></Textarea>
               <Saved type="submit">
                 Зберігти
               </Saved>
          </TodoEditorForm>
     );
  };   
};

export default TodoEditor;