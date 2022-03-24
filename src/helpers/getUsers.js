export const getUsers = () => {
  const URL = 'https://jsonplaceholder.typicode.com/users';

  return fetch(URL)
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

      return users;
    });
};
