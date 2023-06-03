const initialState = { numberOfPresents: 0 };

export function managePresents(state = initialState, action) {
  if (action.type === "presents/increase") {
    return {
      ...state,
      numberOfPresents: state.numberOfPresents + 1,
    };
  }

  // Return the previous state for any other type of action
  return state;
}
