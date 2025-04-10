import React, { useState } from 'react';

const Name = () => {
  const [result, setResult] =useState("")

  const viewResult = (e) => {
    setResult(e.target.value)
    console.log(e.target.value)
  }



  return (
    <div>
      <p>{result}</p>
      <input onChange={viewResult} type="text" placeholder='이름을 입력하세요!' />
    </div>
  );
};

export default Name;