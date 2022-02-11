import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/CounterActions';

class Counter extends React.Component {
  render() {
    const { value, onIncrementClick, onDecrementClick } = this.props;

    return (
      <div>
        <span>{value}</span>
        <button type="button" onClick={onIncrementClick}>+</button>
        <button type="button" onClick={onDecrementClick}>-</button>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);