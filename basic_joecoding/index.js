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
    res.json({'sound' : '멍멍', 'img' : 'https://blog.kakaocdn.net/dn/cIWgr0/btrzdqsa7dC/SH7KmqR8NuO06ArVQIlR81/img.jpg'})
  } else if(name === 'cat'){
    res.json({'sound' : '냐옹', 'img' : 'https://mblogthumb-phinf.pstatic.net/MjAyMTAyMDRfNjIg/MDAxNjEyNDA4OTk5NDQ4.6UGs399-0EXjIUwwWsYg7o66lDb-MPOVQ-zNDy1Wnnkg.m-WZz0IKKnc5OO2mjY5dOD-0VsfpXg7WVGgds6fKwnIg.JPEG.sunny_side_up12/1612312679152%EF%BC%8D2.jpg?type=w800'})
  } else {
    res.json({'error' :  '다시 입력해라', 'img' : 'https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/321931063_1048708586071335_677327260688121881_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=973b4a&_nc_ohc=gvqkSLb-UeUAX_uNrk8&_nc_ht=scontent-ssn1-1.xx&oh=00_AfANjtH6w1Cd6XwCExkYo8IZhStB_CpcR1rCojWKNlvdjg&oe=647A073F'})
  }
})


app.listen(port, () => {
  console.log(`listening on port ${port}`);
})