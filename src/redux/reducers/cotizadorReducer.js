import {
  GET_FORM_VALUES,
  GET_USERS,
  GET_USER_PHONE,
} from '../actions/cotizador';

const initialState = {
  users: [],
  userPhone: [],
  formValues: {},
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

    case GET_FORM_VALUES:
      return {
        ...state,
        formValues: action.payload,
      };
    default:
      return state;
  }
};

export default cotizadorReducer;
