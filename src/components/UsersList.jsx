import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getUsers } from '../store/users/usersSlice';

const User = ({ user }) => <li>{user}</li>;

const UsersList = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [getUsers]);

  if (isLoading) return <div className="loading">Loading...</div>;
  if (error) return <div className="loading">Something went wrong...</div>;

  return (
    <ul>
      {users.map((user) => (
        <User key={uuidv4()} user={user} />
      ))}
    </ul>
  );
};

export default UsersList;
