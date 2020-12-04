const gameHistoryReducer = (state = [{squares: Array(9).fill(null)}], action) => {

  const { squares } = action;
  switch (action.type) {
    case 'ADD_HISTORY':
      return state.concat({squares: squares})
    default:
      return state;
  }
};

export default gameHistoryReducer;