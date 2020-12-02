const xIsNextReducer = (state = true, action) => {
  switch(action.type) {
    case 'CHECK_TURN':
      return !state;
    default:
      return state;
  }
};

export default xIsNextReducer;

