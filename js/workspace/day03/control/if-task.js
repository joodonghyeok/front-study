// 15분
// 이름 : 홍길동
// 국어 : 80점
// 수학 : 70점
// 영어 : 90점
// 과학 : 20점


// 평균, 학점
// 합격여부를 if문으로 처리한다.
// 평균 점수가 60점이상이면 합격을 출력, 아니라면 불합격을 출력

console.log((80 + 70 + 90 + 20) / 4)
console.log((80 + 70 + 90 + 20) / 4 >= 60)

let name = "홍길동"
let kor = 80;
let math = 70;
let eng = 90;
let sc = 20;
let total = kor + math + eng + sc;
let average = total / 4;
let cutline = average >= 60;
let pass = "합격"
let fail = "불합격"
let passingResult = cutline ? pass : fail
let result = `${name}님은 ${average}점으로 ${passingResult}입니다.`
let notResult = `${name}님은 ${average}점으로 ${passingResult}입니다.`

if(cutline){
  // console.log(name + "님은 " + average + "점으로 합격입니다")
  //  "`" 이걸 백팁이라고 부르기로 한다고 하셨다...! 그리고 이걸 사용하는 이유는 문자열 안에 변수를 넣고 싶을 때 사용하면 된다고 하심!
  console.log(result);
}
else{
  console.log(notResult)
}