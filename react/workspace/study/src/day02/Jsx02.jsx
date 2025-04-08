import React from 'react';

//리엑트의 연산
const Jsx02 = () => {
  const name = "홍길동"
  const age = "26"
  
  return (
    <div>
      {name}님의 나이는 {age}입니다!😎
      {/* 문자열로 인식이 되어서 변수를 중괄호를 사용한다! */}
    </div>
  );
};

export default Jsx02;