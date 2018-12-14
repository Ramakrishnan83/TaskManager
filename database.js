var mongoose=require('mongoose');
mongoose.connect('mongodb://databasemongo/task_manager', { useNewUrlParser: true }, function(err){
    if(!!err){
        console.log("not able to connection23");
		console.log(err);
        console.error(err);
    } else {
        console.log("Connection established successfully..");
    }
});

