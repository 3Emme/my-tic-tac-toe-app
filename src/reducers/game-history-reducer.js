const gameHistoryReducer = (state = [{squares: Array(9).fill(null)}], action) => {

  const { squares, history } = action;
  switch (action.type) {
    case 'ADD_HISTORY':
      console.log(history);
      return history.concat({squares: squares})      
    default:
      return state;
  }
};

export default gameHistoryReducer;