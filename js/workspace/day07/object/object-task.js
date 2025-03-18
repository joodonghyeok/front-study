const products = {
  product1 : "지우개",
  product2 : "키보드",
  product3 : "마우스",
  product4 : "연필",
  product5 : "노트북",
}

// products안에 product1 ~ 5번까지 콘솔에 모든 값 출력하기 
// 6분
// console.log(
//   `${products.product1},${products.product2},${products.product3},${products.product4},${products.product5}`
// )

// for ~ in (key) 
// for ~ of (지원하지 않음, 순서가 있는 자료구조에서의 값)

for(let i in products){
  // console.log(i)
  console.log(products[i])
}