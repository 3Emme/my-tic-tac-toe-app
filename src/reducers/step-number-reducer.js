const stepNumberReducer = (state = 0, action) => {
  const { historySlice } = action;
  switch(action.type) {
    case 'STEP_NUMBER':
      return historySlice.length
    default: 
      return state;
  }
}

export default stepNumberReducer;