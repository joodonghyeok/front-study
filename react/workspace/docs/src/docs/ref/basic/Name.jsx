import React, { useRef, useState } from 'react';

const Name = () => {

  const [result, setResult] = useState("");
  // document.querySelecotor()
  const nameRef = useRef()
  
  const onChangeName = (e) => {
    setResult(e.target.value)
  }
  
  const onClickToPutNim = () => {
    // setResult(result[result.length - 1] === "님" ? result : result + "님")
    setResult(nameRef.current.innerText.replace("님", "")  + "님")
  }

  return (
    <div>
      <input type="text" placeholder='이름을 입력하세요' onChange={onChangeName} value={result} />
      <p ref={nameRef}>{result}</p>
      <button onClick={onClickToPutNim}>완료 버튼</button>
    </div>
  );
};

export default Name;