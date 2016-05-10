var express = require('express');
var app = express();
var path = require('path');
var port = 3000;
var router = express.Router();
// when server starts expose 'public' folder to outer  world
app.use(express.static(path.join(__dirname, 'public')));

//name spacing
app.use('/api', router);

router.get('/getProducts', function(req, res) {
    res.json([{ "product": [{ "name": "Elevator" }, { "name": "Escalator" }], "workOrderId": "56fb4d1c0e4bc2a095ff0215", "company": "SNOWPOKE", "status": true, "email": "collinsnicholson@snowpoke.com", "phone": "+1 (855) 566-2288", "description": "Sunt ex aliqua eu enim commodo dolor nulla.", "address1": "814 Voorhies Avenue, Highland, California, 9899", "creationDate": "2015-05-20T05:27:37 +05:00", "appointmentDate": "2016-01-29T04:08:01 +06:00" }, { "product": [{ "name": "Hydraulic" }, { "name": "Elevator" }], "workOrderId": "56fb4d1c294b8298f48ee857", "company": "PROSURE", "status": true, "email": "collinsnicholson@prosure.com", "phone": "+1 (828) 420-2440", "description": "Quis cillum voluptate labore pariatur laborum nulla est elit.", "address1": "627 Grove Street, Brule, Idaho, 8486", "creationDate": "2015-07-06T09:53:57 +05:00", "appointmentDate": "2015-08-21T02:38:18 +05:00" }, { "product": [{ "name": "Hydraulic" }, { "name": "Escalator" }], "workOrderId": "56fb4d1cb68685acc9717058", "company": "AQUAFIRE", "status": true, "email": "collinsnicholson@aquafire.com", "phone": "+1 (945) 438-3226", "description": "Mollit minim mollit ad minim labore consectetur magna velit deserunt consectetur.", "address1": "793 Lott Place, Reinerton, New Mexico, 2100", "creationDate": "2015-01-22T08:55:05 +06:00", "appointmentDate": "2015-06-13T11:40:47 +05:00" }]);
});

//listening our app in the specified port
app.listen(port, function() {
    console.log('SERVER STARTED ON PORT : ' + port);
});
