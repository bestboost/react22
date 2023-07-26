import {useState, useEffect, useRef } from "react";
import {ClockFace, Button} from './Clock.styled';

export default function Clock() {
     const [time, setTime] = useState(() => new Date());
     const intervalId = useRef(null);

     useEffect(() => {
          intervalId.current = setInterval(() => {
               console.log('Це іниервал кожні 1000 сек' + Date.now());
               setTime(new Date());
          }, 1000);

          return() => {
               stop(); 
          }
     }, []);

     const stop = () => {
          clearInterval(intervalId.current);  
     };
       
     return (
          <div>
          <ClockFace>Поточний час: {time.toLocaleTimeString()}
          </ClockFace>
          <Button type="button" onClick={stop}>
               Зупинити
          </Button>
          </div>
     );
};