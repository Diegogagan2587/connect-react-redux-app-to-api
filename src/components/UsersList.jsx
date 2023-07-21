import { useSelector } from 'react-redux';
const UsersList = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);

  if(isLoading) return <div className="loading">Loading...</div>
  

  return (
    <div>
      <p>The user List will be placed here</p>
    </div>
  );
};

export default UsersList;
