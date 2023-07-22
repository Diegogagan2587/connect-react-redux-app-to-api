import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';

const User = ({user})=> <li>{user}</li>;

const UsersList = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  if(isLoading) return <div className="loading">Loading...</div>
  if(error) return <div className="loading">Somthing went wrong...</div>

  return (
    <ul>
      {users.map((user)=><User 
      key={uuidv4()}
      user={user}
      />)}
    </ul>
  );
};

export default UsersList;
