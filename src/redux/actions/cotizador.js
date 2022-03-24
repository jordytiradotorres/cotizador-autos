const URL = 'https://jsonplaceholder.typicode.com/users';

export const GET_USERS = 'GET_USERS';
export const GET_USER_PHONE = 'GET_USER_PHONE';

export const getUsers = () => {
  return function (dispatch) {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        const users = data.map((user) => {
          return {
            id: user.id,
            name: user.name,
            phone: user.phone,
            email: user.email,
          };
        });

        dispatch({
          type: GET_USERS,
          payload: users,
        });
      });
  };
};

export const getUserPhone = (payload) => {
  return {
    type: GET_USER_PHONE,
    payload,
  };
};
