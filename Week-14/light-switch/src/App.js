import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLightSwitch } from './store';
import "./index.css";

const App = () => {
  const lightSwitchOn = useSelector(state => state.lightSwitchOn);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleLightSwitch());
  };

  return (
    <div className={lightSwitchOn ? "lit" : "dark"}>
      <div className= 'box' >
      <p>The room is {lightSwitchOn ? 'lit' : 'dark'}</p>
      <br />
      <button onClick={handleClick}>flip</button>
    </div>
    </div>
    
  );
};

export default App;
