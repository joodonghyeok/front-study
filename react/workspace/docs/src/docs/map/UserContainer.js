import React from 'react';
import Users from './Users';

// 유저의 데이터를 반복문으로 컴포넌트로 분리 후 출력하기
// 실습 15분
// 출력 예시
// ex)
// li태그
//    p태그, 이름 : 홍길동
//    p태그, 나이 : 30(29)
//    p태그, 주소 : 경기도 XX시

const UserContainer = () => {

  const userList = [
    {
       id : 1,
       name : '김철수',
       age : 20,
       address : '경기도 남양주시',
       phone : "010-4117-6845"
    },
    {
       id : 2,
       name : '홍길동',
       age : 30,
       address : '서울시 강남구',
       phone : "010-1257-3542"
    },
    {
       id : 3,
       name : '장보고',
       age : 40,
       address : '서울시 용산구',
       phone : "010-3464-3434"
    },
    {
       id : 4,
       name : '김영희',
       age : 20,
       address : '경기도 구리시',
       phone : "010-7856-1476"
    },
 ]

  const users = userList.map((user, i) => (
    <Users user={user}/>
    
  ))


  return (
    <li>
      {users}
    </li>
  );
};

export default UserContainer;