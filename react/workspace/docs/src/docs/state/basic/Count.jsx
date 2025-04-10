import React, { useState } from 'react';

const Count = () => {
  const [number, setNumber] = useState(0) 
  // use가 들어간 건 훅함수라고도 부른다.
  
  
  const increase = () => {
    setNumber(number + 1)
  }

  const decrease = () => {
    setNumber(number - 1)
  }


  return (
    <div>
      <button onClick={decrease}>-1 감소</button>
      {number}
      <button onClick={increase}>+1 증가</button>
    </div>
  );
};

export default Count;