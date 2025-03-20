const DB = [];

const saveDB = (user, callback) => {
  DB.push(user);
  console.log(`save ${user.name} to DB`)
  return callback(user)
}

const sendEmail = (user, callback) => {
  console.log(`email to ${user.email}`)
  return callback(user)
}

const getResult = (user) => {
  return `success register ${user.name}`
}

const user = {
  name : '홍길동',
  email : "hong123@gmail.com"
}

const register = (user) => {
  return saveDB(user, (user) => {
    return sendEmail(user, (user) => {
      return getResult(user)
    })
  })
}

register(user)

