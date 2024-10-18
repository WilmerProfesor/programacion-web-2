import {useEffect, useState} from 'react';

import UserCard from '../UserCard/UserCard';

import "./UserList.css";

const UserList = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://api.github.com/users")        
        .then(response => response.json())
        .then(data => setUsers(data))
    },[]);

console.log(users);

  return (
    <div id='users-list'>
        {
            users.map(user=>{
                return <UserCard key={user.id} login={user.login} avatar={user.avatar_url}  />
            })
        }
    </div>
  )
}

export default UserList