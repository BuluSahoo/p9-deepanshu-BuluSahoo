const initialState = {
  step: 0,
};

const stepReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_STEP":
      return {
        ...state,
        step: state.step + 1,
      };
    case "RESET_STEPS":
      return {
        ...state,
        step: 0,
      };
    case "DECREAMENT_STEP":
      return {
        ...state,
        step: state.step > 0 ? state.step -1 : 0,
      };
    default:
      return state;
  }
};

export default stepReducer;
