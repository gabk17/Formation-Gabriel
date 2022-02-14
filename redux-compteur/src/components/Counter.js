import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../actions/CounterActions';

class Counter extends React.Component {
  render() {
    const { value, onIncrementClick, onDecrementClick, onResetClick } = this.props;

    return (
      <div>
        <div>
          <span>{value}</span>
        </div>
        
        <button type="button" onClick={onIncrementClick}>Increment</button>
        <button type="button" onClick={onDecrementClick}>Decrement</button>
        <button type="button" onClick={onResetClick}>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state,
});

const mapDispatchToProps = dispatch => ({
  onIncrementClick: () => dispatch(increment()),
  onDecrementClick: () => dispatch(decrement()),
  onResetClick: () => dispatch(reset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
