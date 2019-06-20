var express = require('express');
var router = express.Router();
var axios = require("axios")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get("/simpleRequest",(req,res) => {
//   axios.get("http://localhost:3001/simpleRequest").then(response => {
//     res.json(response.data)
//   })
// })

module.exports = router;
