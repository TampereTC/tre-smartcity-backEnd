var express = require('express');
var bodyParser = require('body-parser');

var api=require('./api');



var orion = express.Router();
orion.use(bodyParser.json());

orion.route('/')
	.get (function(req,res,next){
	   
       api.getAllOrionData().then(data=>{
        res.json(data);
       });
       });

orion.route('/:sensorID')
    .get (function(req,res,next){
       
       api.getParticularSensorData(req.params.sensorID).then(data=>{
        res.json(data);
       });
       });
        
        

module.exports=orion;