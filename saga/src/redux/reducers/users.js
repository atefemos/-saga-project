import * as type from "../actions/type";

const initialState = {
  users: [],
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case type.GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
}
