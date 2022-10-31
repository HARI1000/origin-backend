const mongooose =require("mongoose");
const FeedbackSchema =new mongooose.Schema({
    name:{type:String,required:false},
    email:{type:String,required:false},
    review:{type:String,required:false},
});

const FeedbackModel=mongooose.model("feedbacks",FeedbackSchema)
module.exports=FeedbackModel;