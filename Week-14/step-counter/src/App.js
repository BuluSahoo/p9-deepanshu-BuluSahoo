import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementStep, resetSteps, decreamentStep } from './actions';
import "./index.css"

const StepCounter = () => {
  const step = useSelector(state => state.step);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementStep());
  };
  const handleDecreament = () => {
    dispatch(decreamentStep());
  };

  const handleReset = () => {
    dispatch(resetSteps());
  };

  return (
    <div className='box'>
      <p>You've walked {step} step{step>1 ? "s": ""} today!</p>
      <div className='btns' >
        <button onClick={handleIncrement} className='add'>Add a Step</button>
        <button onClick={handleReset} className='reset'>Reset Steps</button>
        <button onClick={handleDecreament} className='add'>Remove a Step</button>
      </div>
      
    </div>
  );
};

export default StepCounter;
