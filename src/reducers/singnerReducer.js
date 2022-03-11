const initialState = {};

export default function signerReducer(state = initialState, action) {
  switch (action.type) {
    case "SIGNERS":
      return (state = action.value);
    default:
      return state;
  }
}
