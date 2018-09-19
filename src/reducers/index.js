const trackers = (state = [], action) => {
  const trackerIndex = action.id ? state.findIndex(tracker => tracker.id == action.id) : null;
  switch (action.type) {
    case 'ADD_TRACKER':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          colour: action.colour,
          lapse: 0,
        }
      ];
    case 'EDIT_TRACKER':
      return [
        state.slice(0, trackerIndex),
        Object.assign({}, state[trackerIndex], {
          title: action.newTitle,
          colour: action.newColour,
        }),
        state.slice(trackerIndex + 1),
      ];
    case 'DELETE_TRACKER':
      return [
        state.slice(0, trackerIndex),
        state.slice(trackerIndex + 1),
      ];
    case 'UPDATE_LAPSE':
      return [
        state.slice(0, trackerIndex),
        Object.assign({}, state[trackerIndex], {
          lapse: action.newLapse,
        }),
        state.slice(trackerIndex + 1),
      ];
    default:
      return state;
  }
};

export default trackers;