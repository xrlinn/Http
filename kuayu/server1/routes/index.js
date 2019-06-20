var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get("/getJson",(req,res) => {
//   res.json({
//     text:"我是server1返回的数据",
//     data:"空数据"
//   })
// })
router.get("/getJson",(req,res) => {
  res.jsonp({
    text:"我是server1返回的数据",
    data:"空数据"
  })
})

router.get("/simpleRequest",(req,res) => {
  // res.set("Access-Control-Allow-Origin","http://localhost:3002")
  res.json({
      text:"我是简单请求的响应",
      data:"今天很开心server1de借口"
  })
})

// router.options("/nosimple",(req,res) => {
//   res.set({
//     "Access-Control-Allow-Origin":"http://localhost:3002",
//     "Access-Control-Allow-Headers":"Content-Type",
//     "Access-Control-Allow-Methods":"POST",
//     "Access-Control-Allow-Credentials":true
// })
// res.send()
// })

router.post("/nosimple",(req,res) => {
//   res.set({
//     "Access-Control-Allow-Origin":"http://localhost:3002",
//     "Access-Control-Allow-Headers":"Content-Type",
//     "Access-Control-Allow-Methods":"POST",
//     "Access-Control-Allow-Credentials":true
// })
  console.log(req.body)
  res.json({
    text:"我是server1",
    data:"这是非简单请求"
  })
})

module.exports = router;
