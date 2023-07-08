import React from 'react';
import {Box, List} from './TodoList.styled';
import Todo from 'components/Todo/Todo';

const TodoList = ({todos, onDeleteTodo, onToggleCmpleted}) => (
    <Box>
      {todos.map(({id, text, completed}) => (
          <List key={id}>
            < Todo
            text={text}
            completed={completed}
            onToggleCmpleted={() => onToggleCmpleted(id)}
            onDelete={() => onDeleteTodo(id)}
            />
          </List>
      ))}
    </Box>
);

export default TodoList