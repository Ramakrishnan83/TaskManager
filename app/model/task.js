var mongoose=require('mongoose');
var TaskSchema=mongoose.Schema({
    task: {type: String, required: true, unique: true, dropDups: true},
    start_date: { type: Date, default: Date.now },
    End_Date: { type: Date, default: Date.now },
    Priority: { type: Number, required: true, min: 0, max: 30 },
    Finished: { type: Boolean, default: false },
    parent: {type: mongoose.Schema.ObjectId, ref: 'TaskModel', required: false}
});

var TaskModel=mongoose.model('TaskModel',TaskSchema); //TaskModel is the collection name that will be created.
module.exports = TaskModel;
