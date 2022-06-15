import {
  LOADING,
  FULLFILLED,
  REJECTED,
  authLogin,
} from "../actionType/auth";

const initialState = {
  data: {},
  isFetching: false,
  err: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authLogin + LOADING:
      return { ...state, isLoading: true };
    case authLogin + FULLFILLED:
      return {
        ...state,
        data: action.payload.value.data.data,
        isFetching: false,
      };
    case authLogin + REJECTED:
      return { ...state, err: action.payload, isFetching: false };
    default:
      return state;
  }
};

export default authReducer;
