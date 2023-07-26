import { useReducer } from 'react';
import {CounterBox, Value, CounterControls, ButtonInc, ButtonDic} from './Counter.styled';

function countReduser(state, action) {
   switch (action.type){
    case 'increment':
      return {...state, count: state.count + action.payload};

    case 'decrement':
      return {...state, count: state.count - action.payload};

     default:
      throw new Error(`Unsupported action type ${action.type}`);
   }
};

export default function Counter () {
   const [state, dispatch] = useReducer(countReduser, {
    count: 0,
   })

          return (
           <CounterBox>      
            <Value>{state.count}</Value>         
               <CounterControls>
                  <ButtonInc type="button" onClick={()=> dispatch({type:'increment', payload: 1})}>
                  Збільшити  
                  </ButtonInc>
                  <ButtonDic type="button" onClick={()=> dispatch({type:'decrement', payload: 1})}>
                  Зменшити 
                  </ButtonDic>
              </CounterControls>     
           </CounterBox>
          );
}
