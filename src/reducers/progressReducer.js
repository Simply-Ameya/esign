const initialState = 0;

export default function progressReducer(state = initialState, action) {
  switch (action.type) {
    case "PROGRESSINCREASE":
      return (state = state + 1);
    case "PROGRESSDECRESS":
      return (state = state - 1);
    default:
      return state;
  }
}
