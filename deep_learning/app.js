const express = require('express');
const app = express();
const uuidAPIKey = require('uuid-apikey');

const key = {
  apiKey: '1845EKW-89E4XNV-PFNSYH2-B3JGS9S',
  uuid: '0a08574f-425c-4ed7-b3eb-9f4458e50ca7'
}
console.log(uuidAPIKey.create());

const server = app.listen(3000, () => {
  console.log("start server , localhost 3000");
});

app.get('/api/users/:apikey/:type', async (req, res) => {
  let { apikey, type } = req.params;
  if(!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)) {
    res.send("api is not valid 🥲")
  } else {
    // data는 보내고자 하는 api 값
    if(type === "seoul") {
      let data = [
        {name:"멜로디", city:"seoul"},
        {name:"쿠로미", city:"seoul"},
        {name:"바쿠", city:"seoul"},
      ];
      res.send(data)
    } else if (type === '마리랜드') {
      let data = [
        {name:"플랫", city:"마리랜드"},
        {name:"리듬이", city:"마리랜드"},
        {name:"엄마 멜로디", city:"마리랜드"},
      ];
      res.send(data);
    } else {
      res.send('아무도 살지 않는 무인도 🏝️');
    }
  }
})