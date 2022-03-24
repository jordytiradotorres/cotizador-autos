import { GET_USERS, GET_USER_PHONE } from '../actions/cotizador';

const initialState = {
  users: [],
  userPhone: [],
};

const cotizadorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case GET_USER_PHONE:
      return {
        ...state,
        userPhone: state.users.filter((user) => user.phone === action.payload),
      };
    default:
      return state;
  }
};

export default cotizadorReducer;
