var express = require('express');
var router = express.Router();
var Student1=require('../models/studentmodel');
var Student=require('../models/signupmodel');

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
  console.log("Sing up Sucessfully ");
  var query={FN:FN};
  Student1.findOneAndUpdate(query, {
    $set: {
     FN:FN,
     LN:LN,
     P:P,
     CP:CP,
     G1:G1,
     G2:G2,
     PN:PN,
     Ans:Ans
} },{
    new: true,
    upsert: true
  },function(err, doc) {
    if (err) {
      console.log("Something wrong when updating data!");
    }});
 res.redirect('/employee');
});
 router.get('/employee',function(req,res,next){
	Student1.find(function(err,results){
    	if (err) return console.error(err);
    	else{
    		res.render('employee',{info:results});
    	}
  	});
});
router.get('/edit/:id',function(req,res,next){
  var id = req.params.id;
  var query={_id:id};

    Student1.find(query,
      function(err, results) {
        if (err) throw err;
        console.log(results);
        res.render('updateemployee',{info:results});
    });

});




router.get('/delete/:id',function(req,res,next){
	var id = req.params.id;
  	var query={_id:id};

  	Student1.remove({
    	_id: id
  		}, function(err) {
    	if (err) throw err;
    	res.redirect('/employee');
  });


  	
});
router.get('/new', function(req, res, next) {
  res.render('emp');
});

router.post('/new', function(req, res, next) {

var nid = req.body.nid;
var nname = req.body.nname;
var nrel = req.body.nrel;

console.log(nid + " " + nname + " " + nrel);
console.log("Sing up Sucessfully ");
  
  
  var query={nid:nid};
  Student.findOneAndUpdate(query, {
    $set: {
      nid:nid,
      nname:nname,
      nrel:nrel
} }, {
    new: true,
    upsert: true
  }, function(err, doc) {
    if (err) {
      console.log("Something wrong when updating data!");
    }});

	res.redirect('/studentdetails');

});
  
  router.get('/studentdetails',function(req,res,next){
	Student.find(function(err,results){
    	if (err) return console.error(err);
    	else{
    		res.render('studentdetails',{info:results});
    	}
  	});
});
module.exports = router;
