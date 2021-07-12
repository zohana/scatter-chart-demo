import { SET_DATA } from "../actions/Actions";

function dataReducer(state = {}, action) {
  switch (action.type) {
    case SET_DATA:
      state = action.payload;
      return state;
    default:
      return state;
  }
}

export { dataReducer };
