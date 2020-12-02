const gameHistoryReducer = (state = [], action) => {

  const { squares } = action;
  switch (action.type) {
    case 'ADD_HISTORY':
      return state.concat(squares)
    default:
      return state;
  }
};

export default gameHistoryReducer;

// export default (state = [], action) => {

//   const { squares } = action;
//   switch (action.type) {
//     case 'ADD_HISTORY':
//       return state.concat(squares)
//       default:
//         return state;
//   }
// };

// export default (state = {}, action) => {
//   const { names, location, issue, id } = action;
//   switch (action.type) {
//   case 'ADD_TICKET':
//     return Object.assign({}, state, {
//       [id]: {
//         names: names,
//         location: location,
//         issue: issue,
//         id: id
//       }
//     });
//   case 'DELETE_TICKET':
//     const newState = { ...state };
//     delete newState[id];
//     return newState;
//   default:
//     return state;
//   }
// }; 