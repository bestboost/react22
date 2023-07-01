import React, {Component} from 'react';
// import Counter from './components/Counter';
// import Dropdown from "components/Dropdown";
// import ColorPicker from 'components/ColorPicker';
// import TodoList from 'components/TodoList';
import initialsTodos from './todos.json';
import Container from 'components/Container';
import Form from 'components/Form';


// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component  {
  state = {
        todos: initialsTodos,
  };
  
  deleteTodo = todoId => {
        this.setState(prevState => ({
                todos: prevState.todos.filter(todo => todo.id !== todoId),
        }));
  };

 formSubmitHandler = data => {
        console.log(data)
 }
    
   render() {   
        // const {todos} = this.state;
        // const allTodos = todos.length;
        // const completedTodos = todos.reduce(
        //         (total, todo) => (todo.completed ? total +1 : total),
        //         0,
        // );
        return (
                <Container>
                    <Form onSubmit={this.formSubmitHandler}/>
                </Container>
        //         <>
        //  <Counter  initialValue={0}/>
        //  <Dropdown />
        //  <ColorPicker options={colorPickerOptions}/>
        //          <div>
        //                 <p>All : {allTodos}</p>
        //                 <p>Done :  {completedTodos}</p>
        //         </div>
        //  <TodoList todos={todos} onDeleteTodo={this.deleteTodo}/>
        //         </>
        )};

};

export default App;