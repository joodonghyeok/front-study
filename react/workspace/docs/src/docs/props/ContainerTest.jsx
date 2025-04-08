import React from 'react';
import ComponentTest01 from './ComponentTest01';

const ContainerTest = () => {
  const name = "홍길동"
  const age = "20"
  const address = "강남"
  const style = {color:"blue"}

  // 스타일을 props로 자식요소에게 넘겨서, 이름 컬러를 적용시키기

  return (
    <div>
      <ComponentTest01 name = {name} age = {age} address ={address} style = {style} />
    </div>
  );
};

export default ContainerTest;