const mongoose=require("mongoose");
const PrgrmDataSchema=new mongoose.Schema({
    prginp:{type:String,required:false}

});
const prgrmdatamodel=mongoose.model("prgrmdata",PrgrmDataSchema)
module.exports=prgrmdatamodel;