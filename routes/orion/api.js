var request = require('request');
var Promise = require('promise');
var url="location.host";

var getAllOrionData=function getAllOrionData(){
      return new Promise(function (fulfill, reject){
      request({
            url: "http://"+url+":1026/v2/entities/",
            headers: {
            'Fiware-Service':      'development',
            'Fiware-ServicePath':  '/nokiaHV30'
            },
            method: "GET",
            json: true,   // <--Very important!!!
            }, function (error, response,body){
                if (error) reject(error);
                else return fulfill(body);
            });
    })
}

var getParticularSensorData=function getParticularSensorData(sensorID){
      return new Promise(function (fulfill, reject){
      request({
            url: "http://"+url+":1026/v2/entities/"+sensorID+"?options=keyValues",
            headers: {
            'Fiware-Service':      'development',
            'Fiware-ServicePath':  '/nokiaHV30'
            },
            method: "GET",
            json: true,   // <--Very important!!!
            }, function (error, response,body){
                if (error) reject(error);
                else return fulfill(body);
            });
    })
}



exports.getAllOrionData=getAllOrionData;
exports.getParticularSensorData=getParticularSensorData;
