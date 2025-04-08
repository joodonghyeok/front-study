import React from 'react';


// 이름, 취미, 인사를 작성하여 화면에 출력하기


const Jsx03 = () => {
  const name = "주동혁"
  const hobby = "유튜브 보기"
  const message = "안녕하세요오 만나서 반가워요"
  const style = {color:"blue"}

  return (
    <div>
      안녕하세요 저는 {name}입니다. 저의 취미는 {hobby}입니다! 잘 부탁드립니다.
      <p style={style}> {message} </p>
    </div>
  );
};

export default Jsx03;