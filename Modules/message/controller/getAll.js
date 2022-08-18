const messageModel = require("../../../DB/Models/message")



const getAll = async (req, res)=>{

   try{

    const allMessages = await messageModel.find({}).populate ("receiverID", "name email")

    res.json ({message:"Done", allMessages})

   }catch(error){

    res.json({message:"Catch Error", error})

   }
}


module.exports = getAll
