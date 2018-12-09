var express=require('express');
var Router=express.Router();
const Task = require("./../model/Task");
const TaskController = require("./../controllers/task.controller");

//Based on the incoming routes, decide the function to call to take action.
Router.post("/tasks",TaskController.create);
Router.get("/tasks",TaskController.getAll);

//if the incoming request has id parameter and get request
Router.get("/tasks/:id",function(req,res){
//parse the incoming request
let id = req.params.id;
Task.findOne({_id:id}).exec(function(err,Task){
    if (!!err){
        console.error(err);
        res.json({success:false,message:err.message});
    }
    else{
          res.json({success:true,data:Task});
    }
})
})

Router.put("/tasks/:id",function(req,res){
    //parse the incoming request
    let id = req.params.id;
    let task = req.body;

    Task.findByIdAndUpdate(id,{$set: task},{},function(err,Task){
        if (!!err){
            console.error(err);
            res.json({success:false,message:err.message});
        }
        else{
              res.json({success:true,data:Task}) ;
        }
    })
})

Router.delete("/tasks/:id",function(req,res){
    //parse the incoming request
    let id = req.params.id;
    Task.remove(id,function(err){
        if (!!err){
            console.error(err);
            res.json({success:false,message:err.message});
        }
        else{
              res.json({success:true}) ;
        }
    })
})

module.exports=Router;