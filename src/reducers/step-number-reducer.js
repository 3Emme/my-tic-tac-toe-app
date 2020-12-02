const stepNumberReducer = (state = 0, action) => {
  switch(action.type) {
    case 'STEP_NUMBER':
      return state.length
    default: 
      return state;
  }
}

export default stepNumberReducer;