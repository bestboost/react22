import React, {Component} from "react";
import {TodoEditorForm, Textarea, Saved} from './TodoEditor.styled';

class TodoEditor extends Component {

  render () {
     return (
          <TodoEditorForm>
               <Textarea>

               </Textarea>
               <Saved type="submit">
                 Зберігти
               </Saved>
          </TodoEditorForm>
     );
  };   
};

export default TodoEditor;