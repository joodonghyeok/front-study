import React, { useRef } from 'react';

const Check = () => {
  const inputRef = useRef([]);
  const formRef = useRef();

  const onclickToCheck = () => {
    for(let input of inputRef.current){
      if(!input.value){
        return alert(input.name + "값을 입력하세요")
      }
    }
    formRef.current.submit();
  }

  return (
    <div>
      <form ref={formRef}>
        <div>
          <span>아이디</span>
          <input name="id" ref={(el) => {inputRef.current[0] = el}} placeholder='아이디를 입력하세요.' />
        </div>
        <div>
          <span>비밀번호</span>
          <input name="password" ref={(el) => {inputRef.current[1] = el}} placeholder='비밀번호를 입력하세요.' />
        </div>
        <button onClick={onclickToCheck} type="button">전송</button>
      </form>
    </div>
  );
};

export default Check;