const express = require('express')
var cors = require('cors')
const app = express();
let port = '3000';

app.use(cors())

// params 활용
// app.get('/user/:id', function (req, res) {
//   const q = req.params;
//   console.log(q.id)
//   res.json({'userId' : q.id})
// })

// query string (/?키=value&키=value)
// app.get('/user/:id', function (req, res) {
//   const q = req.query;
//   console.log(q.q)
//   console.log(q.name)
//   res.json({'userId' : q.q})
// })

// 실습
app.get('/sound/:name', function (req, res) {
  const { name } =  req.params; //{name: "이름"}
  console.log(name)
  if(name === 'dog') {
    res.json({'sound' : '멍멍'})
  } else if(name === 'cat'){
    res.json({'sound' : '냐옹'})
  } else {
    res.json({'error' :  '다시 입력해라'})
  }
})


app.listen(port, () => {
  console.log(`listening on port ${port}`);
})