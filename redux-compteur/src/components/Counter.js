import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../actions/CounterActions';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)
    return (
      <div>
        <div>
          <span>{counter}</span>
        </div>
        
        <button type="button" onClick={() => dispatch(increment())}>Increment</button>
        <button type="button" onClick={() => dispatch(decrement())}>Decrement</button>
        <button type="button" onClick={() => dispatch(reset())}>Reset</button>
      </div>
    );
  
}

export default Counter;
