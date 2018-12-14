const Task = require("../model/task");

module.exports = {
    create: function (req, res) {
        console.log(req.body);
        var task = new Task(req.body)
        task.save(function (err) {
            if (!!err) {
                console.error(err);
                res.json({ success: false, message: err.message })
            } else {
                res.status(201).json({ success: true });
            }
        })
    },
    getAll: function(req, res){
        Task.find({}).exec(function(err, tasks){
            if(!!err){
                console.error(err);
                res.json({success: false, message: err.message});
            } else {
                res.json({success: true, data: tasks});
            }
        })
    } 
}