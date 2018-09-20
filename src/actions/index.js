let nextTrackerId = 0;
export const addTracker = (title, colour) => ({
  type: 'ADD_TRACKER',
  id: nextTrackerId++,
  title,
  colour,
});

export const editTracker = (id, newTitle, newColour) => ({
  type: 'EDIT_TRACKER',
  id,
  newTitle,
  newColour,
});

export const deleteTracker = id => ({
  type: 'DELETE_TRACKER',
  id,
});

export const updateLapse = (id, newLapse) => ({
  type: 'UPDATE_LAPSE',
  id,
  newLapse,
});

