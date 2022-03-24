import { useState, useEffect } from 'react';
import { getUsers } from '../helpers/getUsers';

export const useUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    setLoading(true);
    getUsers().then((result) => {
      setUsers(result);
      setLoading(false);
    });
  }, [setUsers]);

  return {
    loading,
    users,
  };
};
