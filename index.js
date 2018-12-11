var express=require('express');
var bodyParser=require('body-parser');
var taskrouter=require('./app/Router/task.router');
var cors=require('cors');

var app=express();
var port = process.env.PORT || 3000;

//For home page access- load the index.html from web folder
app.use("/",express.static('web'));
app.use(bodyParser.json());
app.use(cors());

//for url access with Task , load the task.router

app.use("/api",taskrouter);

app.listen(port,function(err){
if (!!err)
{
    throw err;
}
else
{
    console.log("listening at 3000");
    //Load my DB connection
    require("./app/db/database")
}
})
