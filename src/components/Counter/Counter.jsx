import {useState, useEffect} from 'react';
// import Controls from './Controls';
import {CounterBox, Value, CounterControls, ButtonInc, ButtonDic} from './Counter.styled';

export default function Counter () {
  const[counterA, setCounterA] = useState(0);
  const[counterB, setCounterB] = useState(0);
    
  const handleA= () => {
    setCounterA(prevState =>  prevState + 1);       
  };

  const handleB = () => {
    setCounterB(prevState => prevState + 1);        
  };

  useEffect(() => {
     const totalClick = counterA + counterB;
     document.title = `Всього кликнули ${totalClick} разів`
   }, [counterA, counterB])  

          return (
           <CounterBox>               
               <CounterControls>
                  <ButtonInc type="button" onClick={handleA}>
                  Збільшити A <Value>{counterA}</Value>
                  </ButtonInc>
                  <ButtonDic type="button" onClick={handleB}>
                  Збільшити B <Value>{counterB}</Value>
                  </ButtonDic>
              </CounterControls>     
           </CounterBox>
          );
}
