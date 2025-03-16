//for(초기식, 조건식, 증감식){}

// for(let i = 0; i< 10; i++){
//   console.log("조건식이 만족할 떄 실행하는 문장")
// }

// for(let i = 0; i < 10; i++){
//   console.log(i + 1)
// }

// // 1 ~ 10까지 출력하기
// for(let i = 10; i > 0; i--){
//   console.log(i)
// }

// 10 ~ 1까지 출력하기
// for(let i = 0; i < 10; i++){
//   console.log(10 - i)
//   if(i === 5){
//     break; // 5만 빼려면 continue를 사용하면 된다!
//   }
// }

for(let i = 0; i < 10; i++){
  if(i === 5){
    continue; // 5만 빼려면 continue를 사용하면 된다! 대신 console보다 먼저 나오면 중괄호를 탈출하기 때문에 console이 적용이 안되서 5를 제외하고 나오게 될 것이다!
  }
  console.log(10 - i)
}


// 1) 1 ~ 100까지 짝수만 출력하기
for(let i = 1; i<=100; i++){
  if(i % 2 ===0){
    console.log(i)
  }
}

// 2) 1 ~ 10까지 모든 누적합 구하기
let result = 0

for(let i=0; i< 10; i++){
  result += i + 1
  console.log(result)
}

// 3) 0 ~ 10까지 5만 빼고 출력하기

// 4) 012340123401234 출력하기