// import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/store';

export const Layout = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.myValue);

  return (
    <div>
      {value}
      <br />
      <button onClick={() => dispatch(increment(100))}>Increment</button>
      <button onClick={() => dispatch(decrement(100))}>Decrement</button>
    </div>
  );
};
