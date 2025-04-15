import React from 'react';

const Users = ({user}) => {
  const {name,age,address} = user;


  return (
    <li>
      <p>이름 : {name} </p>
      <p>나이 : {age} </p>
      <p>주소 : {address} </p>
    </li>
  );
};

export default Users;