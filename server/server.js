const express = require("express")
const app =express()
const PORT=process.env.PORT ||3001;
const mongoose =require("mongoose");
const cors=require('cors');
require('dotenv').config();
const FeedbackModel=require('./models/feedback')
const prgrmdatamodel=require('./models/senddata')
app.use(express.json());
app.use(cors({
    origin:["http://localhost:3000","https://origintranscoder.onrender.com"]
}
));

mongoose.connect(process.env.MONGO_URL).then(console.log("connect to mongo")).catch(err=>console.log(err));

app.get("/",(req,res)=>{
    console.log('caled');
    res.download("xx.png",(err)=>{
        if(err)
        console.log(err);
    })
    console.log('afterdown');
})

app.get("/getfeedback",(req,res)=>{
    FeedbackModel.find({},(err,result)=>  {
        if(err)
        {res.json(err)
        }
        else
        {res.json(result)

        }
    });
})
app.post("/addfeedback",async(req,res)=>{
    const feedback=req.body;
    console.log(feedback);
    const newFeedback= new FeedbackModel(feedback);
    await newFeedback.save();
    res.json(feedback);
    console.log("sent");
})

app.post("/addprgrm",async(req,res)=>{
    const senddata=req.body;
    console.log("****");
    console.log(senddata);
    const newprgrmdata=new prgrmdatamodel(senddata);
    await newprgrmdata.save();
    res.json(senddata);
    console.log("sentthe program data");
})





app.listen(PORT,()=>{
    console.log("Server runs in port",PORT);
});
