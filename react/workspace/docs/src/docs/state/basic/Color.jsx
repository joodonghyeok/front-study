import React, { useState } from 'react';

// 빨간색 버튼을 누르면 글자색을 빨갛게
// 파란색 버튼을 누르면 글자색을 파랗게
// 핑크색 입력 시 글자의 색깔을 없앤다.
const Colors = () => {
  
  const [result, setResult] = useState("")
  const [color, setColor] = useState("")

  const onChangeResult = (e) => {
    if(e.target.value === "핑크색") {
      setColor("")
    }
    setResult(e.target.value)
  }
  const onClickToColorRed = () => setColor("red")
  const onClickToColorBlue = () => setColor("blue")
  
  return (
    <div>
      <p style={{color}}>{result}</p>
      <input onChange={onChangeResult}/>
      <button onClick={onClickToColorRed}>빨간색</button>
      <button onClick={onClickToColorBlue}>파란색</button>
    </div>
  );
};

export default Colors;