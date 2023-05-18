import { createStore } from 'redux';

const initialState = {
  lightSwitchOn: false,
};

const TOGGLE_LIGHT_SWITCH = 'TOGGLE_LIGHT_SWITCH';

export const toggleLightSwitch = () => ({
  type: TOGGLE_LIGHT_SWITCH,
});

export const lightSwitchReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LIGHT_SWITCH:
      return {
        ...state,
        lightSwitchOn: !state.lightSwitchOn,
      };
    default:
      return state;
  }
};

export const store = createStore(lightSwitchReducer);
