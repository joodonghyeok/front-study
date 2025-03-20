// 12분
// ES8 async await 데이터 통신
// 1)
// https://jsonplaceholder.typicode.com/todos
// getTodos
// title만 5개 가져와서 콘솔에 출력

const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos")
  const todos = await response.json()
  return todos;
}

// getTodos()
  // .then((todos) => todos.map((user) => user.title))
//   .then((titles) => titles.slice(0, 5))
//   .then((titles) => {
//     titles.forEach((title) => {
//       console.log(`제목 : ${title}`)
//     })
//   })
//   .catch((err) => {
//     console.error(`getTitles ${err}`)
//   })

// 12분
// 2) 
// getTodos
// completed true인 todo만 가져와서 콘솔에 출력

getTodos()
  .then((todos) => todos.filter((todos) => todos.completed))
  .then((cTodos) => cTodos.slice(0, 20))
  .then((cTodos) => cTodos.map((todo) => todo.title))
  .then((titles) => titles.map((title) => title.split(" ")[0]))
  .then((titles) => titles.map((title) => `제목 : ${title}`))
  .then((titles) => {
    titles.forEach((title) => {
      console.log(title)
    })
  })
