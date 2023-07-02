import {Box, List, Input, Text, Delete} from './TodoList.styled';

const TodoList = ({todos, onDeleteTodo, onToggolCmpleted}) => (
    <Box>
      {todos.map(({id, text, completed}) => (
          <List key={id} >
              <Input type="checkbox" 
               checked={completed}
               onChange={() => onToggolCmpleted(id)}
                 />
               <Text>{text}</Text>
               <Delete 
               onClick={() => onDeleteTodo(id)}>
                X
                </Delete>
          </List>
      ))}
    </Box>
);

export default TodoList