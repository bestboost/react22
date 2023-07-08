import {Box, Input, Text, Delete} from './Todo.styled';
import {ReactComponent as DeleteIcon} from '../../icons/delete.svg';

const Todo = ({text, completed, onToggleCmpleted, onDelete}) => {
     return (
          <Box>
               <Input type="checkbox" 
                 checked={completed}
                 onChange={onToggleCmpleted}
                 />
               <Text>{text}</Text>
               <Delete type="button"
                 onClick={onDelete}>
                  <DeleteIcon width="32" heigth="32" fill="green" aria-label="delete todo"/>
              </Delete>
          </Box>
     );
};

export default Todo;
