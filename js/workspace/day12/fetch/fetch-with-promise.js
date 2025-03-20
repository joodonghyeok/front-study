// https://jsonplaceholder.typicode.com/posts/100
// fetch의 return 타입은 Promise이다!
fetch("https://jsonplaceholder.typicode.com/posts/100")
  .then((response) => {
    // Early Return
    if(!response.ok) throw new Error(`response : ${response.status}`)
    return response.json()
  })
  .then((post) => {
    if(!post) throw new Error(`none result`);
    return post
  })
  .then((post) => {
    console.log(post)
  })
  .catch((err) => { console.error(err) })