import {Box, List, Text, Delete} from './TodoList.styled';

const TodoList = ({todos, onDeleteTodo}) => (
    <Box>
      {todos.map(({id, text}) => (
          <List key={id}>
               <input type="checkbox" 
              //  checked={complited}
                 />
               <Text>{text}</Text>
               <Delete onClick={() => onDeleteTodo(id)}>X</Delete>
          </List>
      ))}
    </Box>
);

export default TodoList