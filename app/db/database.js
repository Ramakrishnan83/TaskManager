var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/task_manager', { useNewUrlParser: true }, function(err){
    if(!!err){
        console.log("not able to connection");
        console.error(err);
    } else {
        console.log("Connection established successfully..");
    }
});
