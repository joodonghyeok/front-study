// 14분
// age 상수로 나이를 설정한다(임의)
// 19세 이상 성인이라면 "입장 가능"
// 성인이 아니라면 "입장 불가"
// 성인과 관계 없이 age가 짝수라면 "당첨"을 출력

import React from 'react';
import PassComponent from './PassComponent';
import LuckyComponent from './LuckyComponent';
import UnLuckyComponent from './UnLuckyComponent';
import NotPassComponent from './NotPassComponent';

const Jsx05 = () => {

  const age = 21;
  const isAdult = age >= 20;
  const isEven = age % 2 === 0;


  const enter = isAdult ? <PassComponent /> : <NotPassComponent />
  const win = isEven ? <LuckyComponent /> : <UnLuckyComponent />

  return (
    <div>
      <p>당신의 나이는 {age}이므로</p>
      {enter}
      {win}
    </div>
  );
};

export default Jsx05;