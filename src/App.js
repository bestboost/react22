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
import IconButton from 'components/IconButton';
import { ReactComponent as AddIcon } from './icons/add.svg';
// import Clock from 'components/Clock';
// import Tabs from 'components/Tabs';
// import tabs from './tabs.json'
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
       const todos = localStorage.getItem('todos')
       const parseTodos = JSON.parse(todos);
     
       if(parseTodos) {
        this.setState({todos: parseTodos});
       };     
 };

 componentDidUpdate(prevProps, prevState) {
        const nextTodos = this.state.todos;
        const prevTodos = prevState.todos;

       if(nextTodos!== prevTodos) {
           localStorage.setItem('todos', JSON.stringify(nextTodos));
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

        this.toggleModal();
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

       return todos.reduce(
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

 toggleModal = () => {
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
               
                <Container >
                        
                    {/* <Formik />
                    <Form onSubmit={this.formSubmitHandler}/> */}

                    {/* <Tabs items={tabs}/> */}
                    {/* {showModal && <Clock/>} 
                    <button type="button" onClick={this.toggleModal}> 
                            Відкрити/Закрити годинник
                    </button> */}

                     <IconButton onClick={this.toggleModal} aria-label="add todo">
                           <AddIcon width="40" height="40" fill="green"/>
                     </IconButton>
                    
                    {showModal && (
                    <Modal onClose={this.toggleModal}> 
                        <TodoEditor onSubmit={this.addTodo}/>
                    </Modal>)} 

                    <div>
                       <p>All : {allTodos}</p>
                       <p>Done : {completedTodos}</p>
                    </div>
                
                <Filter value={filter} onChange={this.changeFilter}/>

                <TodoList todos={visibleTodos} 
                        onDeleteTodo={this.deleteTodo}
                        onToggleCmpleted={this.toggleCompleted} 
                />
                </Container>
        //         
        //  <Counter  initialValue={0}/>
        //  <Dropdown />
        //  <ColorPicker options={colorPickerOptions}/>               
          
        )};

};

export default App;