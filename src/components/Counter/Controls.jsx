import {CounterControls, ButtonInc, ButtonDic} from './Counter.styled';

const Controls = ({onIncrement, onDecrement}) => (
<CounterControls>
    <ButtonInc type="button" onClick={onIncrement}>
     Збільшити на 1</ButtonInc>
    <ButtonDic type="button" onClick={onDecrement}>
     Зменшити на 1</ButtonDic>
</CounterControls>
);

export default Controls;