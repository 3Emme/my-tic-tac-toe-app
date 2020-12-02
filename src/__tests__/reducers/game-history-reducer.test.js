import gameHistoryReducer from '../../reducers/game-history-reducer';

describe('gameHistoryReducer', () =>{

  let action;
  const startingHistory = [
    {squares: [null, null, null, null, null, null, null, null, null]},
];

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(gameHistoryReducer({}, { type:null})).toEqual({});
  });

  test('Should succesfully add new slice to history array', () => {
    const { history } = startingHistory;
    action = {
      type: 'ADD_HISTORY',
      history: history,
    };
    expect(gameHistoryReducer(startingHistory, action)).toEqual(
      [
        {squares: [null, null, null, null, null, null, null, null, null]}, 
        {squares: ['X', null, null, null, null, null, null, null, null]},
      ]
    );
  });
});