import React, {Component} from 'react';
import shortid from 'shortid';
// import Counter from './components/Counter';
// import Dropdown from "components/Dropdown";
// import ColorPicker from 'components/ColorPicker';
import TodoList from 'components/TodoList';
import initialsTodos from './todos.json';
import TodoEditor from 'components/TodoEditor';
import Container from 'components/Container';
// import Form from 'components/Form';


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

  addTodo = text => {
        const todo = {
                id: shortid.generate(),
                text,
                comlited: false,
        };

        this.setState(({todos}) => ({
                todos: [todo, ...todos],
        }));
  };
  
  deleteTodo = todoId => {
        this.setState(prevState => ({
                todos: prevState.todos.filter(todo => todo.id !== todoId),
        }));
  };

 formSubmitHandler = data => {
        console.log(data)
 };

//  toggleCompleted = todoId => {
//         this.setState(({todos}))
//  }
    
   render() {   
        const {todos} = this.state;
        const allTodos = todos.length;
        const completedTodos = todos.reduce(
                (total, todo) => (todo.completed ? total +1 : total),
                0,
        );
        
        return (
                <Container>
                    {/* <Form onSubmit={this.formSubmitHandler}/> */}

                    <div>
                       <p>All : {allTodos}</p>
                       <p>Done :  {completedTodos}</p>
                    </div>
        <TodoEditor />
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo}/>
                </Container>
        //         
        //  <Counter  initialValue={0}/>
        //  <Dropdown />
        //  <ColorPicker options={colorPickerOptions}/>               
          
        )};

};

export default App;