import React, { useState } from 'react';
// 강아지 버튼과 고양이 버튼을 만들고
// 버튼을 눌렀을 때 각각 울음소리가 나오도록 구현하기

const Sound = () => {
  const [sound ,setSound] = useState("")
  
  const dogSound = ()=> {
    setSound("멍멍")
  }

  const catSound = () => {
    setSound("야옹")
  }



  return (
    <div>
      <p>{sound}</p>
      <button onClick={dogSound}>강아지</button>
      <button onClick={catSound}>고양이</button>
    </div>
  );
};

export default Sound;