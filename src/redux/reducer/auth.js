import {
  FETCHING,
  FULLFILLED,
  REJECTED,
  authLogin,
} from "../actionType/action";

const initialState = {
  dataLogin: {},
  isFetching: false,
  err: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authLogin + FETCHING:
      return { ...state, isFetching: true };
    case authLogin + FULLFILLED:
      return {
        ...state,
        dataLogin: action.payload.value.data.data,
        isFetching: false,
      };
    case authLogin + REJECTED:
      return { ...state, err: action.payload, isFetching: false };
    default:
      return state;
  }
};

export default authReducer;
