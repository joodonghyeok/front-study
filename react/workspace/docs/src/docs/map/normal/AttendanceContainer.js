import React from 'react';
import Student from './Student';
// 다음은 학생의 출석부이다
// 출석 여부(isPresent)에 따라 출석한 사람만 
// 컴포넌트로 출력하고 이름을 파란색, 글자크기를 "20px"로 변경하기
// 단, style은 Container에 선언한다.
const AttendanceContainer = () => {

  const attendanceData = [
    { id: 1, name: "서예달", isPresent: true },
    { id: 2, name: "김중재", isPresent: false },
    { id: 3, name: "이채현", isPresent: true },
    { id: 4, name: "김해선", isPresent: false },
    { id: 5, name: "조장희", isPresent: true },
    { id: 6, name: "전지후", isPresent: false },
    { id: 7, name: "안서희", isPresent: true },
    { id: 8, name: "김순호", isPresent: false },
    { id: 9, name: "고대현", isPresent: true },
    { id: 10, name: "주송혁", isPresent: true },
  ];

  const style = {
    fontSize : "20px",
    color : "blue"
  }

  return (
    <li>
      {student}
    </li>
  );
};

export default AttendanceContainer;