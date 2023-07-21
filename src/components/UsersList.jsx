import { useSelector } from 'react-redux';
const UsersList = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);

  return (
    <div>
      <p>The user List will be placed here</p>
    </div>
  );
};

export default UsersList;
