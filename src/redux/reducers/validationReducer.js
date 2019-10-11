const initialState = {
  error: false,
  fields:[]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "HAS_ERROR_FORM":
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}
