var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
router.post('/', function(req, res) {
  var FN = req.body.FN;
  var LN = req.body.LN;
  var P = req.body.P;
  var CP = req.body.CP;
  var G1 = req.body.G1;
  var G2 = req.body.G2;
  var PN = req.body.PN;
  var Ans = req.body.Ans;
 console.log(FN +" "+ LN +" "+ P +" "+ CP +" "+ G1 +" "+ G2 +" "+ PN +" "+ Ans);

  res.render('index');
});


module.exports = router;
