import React, {Component} from 'react';
import shortid from 'shortid';
// import Counter from './components/Counter';
// import Dropdown from "components/Dropdown";
// import ColorPicker from 'components/ColorPicker';
import TodoList from 'components/TodoList';
import initialsTodos from './todos.json';
import TodoEditor from 'components/TodoEditor';
import Container from 'components/Container';
import Filter from 'components/filter';
import Modal from 'components/Modal';
// import Form from 'components/Form';
// import Formik from './components/Formik';

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
        filter: '',
        showModal: false,
  };

  componentDidMount() {
        // console.log('App componentDidMount');

       const todos = localStorage.getItem('todos')
       const parseTodos = JSON.parse(todos);
     
       if(parseTodos) {
        this.setState({todos: parseTodos});
       };
       
 };

 componentDidUpdate(prevProps, prevState) {
        // console.log('App componentDidUpdate');

       if(this.state.todos !== prevState.todos) {
        // console.log('Обновилось поле todos')

        localStorage.setItem('todos', JSON.stringify(this.state.todos));
         };
 };

 addTodo = text => {
        const todo = {
                id: shortid.generate(),
                text,
                completed: false,
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

 toggleCompleted = todoId => {
        this.setState(({todos}) => ({
                todos: todos.map(todo => 
             todo.id === todoId 
             ? {...todo, completed: !todo.completed}
             :todo, 
             ), 
        }));
 };

 changeFilter = e => {
        this.setState({filter: e.currentTarget.value})
 };

 calculateCompletedTodos = () => {
        const {todos} = (this.state);

        todos.reduce(
        (total, todo) => (todo.completed ? total +1 : total),
        0,);
 };

 getVisibleTodos = () => {
        const {todos, filter} = (this.state)
        const normolizedFilter = filter.toLocaleLowerCase();

        return todos.filter(todo => 
             todo.text.toLocaleLowerCase()
             .includes(normolizedFilter),   
        );
 };

 toggoleModal = () => {
        this.setState(({showModal}) => ({
          showModal: !showModal, 
        }));
  };
    
    
   render() {   
        const {todos, filter, showModal} = this.state;
        const allTodos = todos.length;
        const completedTodos = this.calculateCompletedTodos();
        const visibleTodos = this.getVisibleTodos();
        
        return (
                // <Formik />
                <Container>
                    {/* <Form onSubmit={this.formSubmitHandler}/> */}
                    <button type="button" onClick={this.toggoleModal}> 
                    Відкрити модалку</button>
                    {showModal && (<Modal onClose={this.toggoleModal}>
                        <h1>Привіт - це контент модалки як children</h1>
                        <button type="button" onClick={this.toggoleModal}>
                                Закрити
                        </button>
                        </Modal>)} 
                    <div>
                       <p>All : {allTodos}</p>
                       <p>Done :  {completedTodos}</p>
                    </div>
                <TodoEditor onSubmit={this.addTodo}/>
                <Filter value={filter} onChange={this.changeFilter}/>
                <TodoList todos={visibleTodos} 
                        onDeleteTodo={this.deleteTodo}
                        onToggolCmpleted={this.toggleCompleted} 
                />
                </Container>
        //         
        //  <Counter  initialValue={0}/>
        //  <Dropdown />
        //  <ColorPicker options={colorPickerOptions}/>               
          
        )};

};

export default App;