var express = require('express');
var router = express.Router();
var Furniture = require('../models/furniture');
var ip = require('ip');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Furniture Show Room' });
});

router.get('/furniture/ipaddress', function(req, res) {
	console.log('reached route');
	
	//var yip2=java.net.InetAddress.getLocalHost();	
   // var yip=yip2.getHostAddress();
  // var ip = location.host;
 // var ipa = ip.address();
  console.log('Ip '+ip.address());
   res.render('index',{title:"hi"})
                  
});

router.get('/furniture/:item', function(req, res) {
	console.log('reached route');
	
	var item = req.params.item;
	console.log('item '+item);
	Furniture.findOne({name:item},function(err,foundFurniture){
       if (err) console.log("Error@@@"+err);
        else {
        	console.log('reached else');
        	console.log(foundFurniture);
            res.render('furniture',{name:foundFurniture.name,type:foundFurniture.type
              //  furniture: foundFurniture
            })
            //res.status(200).send('Successfully get a company ' + comp_id);
        }
    })

});

router.get('/item', function(req, res) {
	
	console.log(" Query "+req.query);
	
	var query=req.query.furniture;
	//http://localhost:3000/item?furniture=Table
	console.log('query '+query);
	// Ip Address Part


	Furniture.find({name:query},'type',function(err,foundFurniture){
       if (err) console.log("Error@@@"+err);
        else {
        	console.log('reached else');
        	console.log(foundFurniture);
            res.render('furnitureList',{furnitureList:foundFurniture,item:query,ipaddress:ip.address()
              //  furniture: foundFurniture
            })
            //res.status(200).send('Successfully get a company ' + comp_id);
        }
    })

});

module.exports = router;
