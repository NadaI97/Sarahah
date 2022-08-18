const mongoose = require('mongoose');

const connectDB = ()=>{

    return mongoose.connect(process.env.DBURL).then((results)=>{
            console.log("connected...");

    }).catch(error=>{console.log("Error", error)})
}


module.exports= connectDB