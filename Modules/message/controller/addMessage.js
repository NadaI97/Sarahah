const messageModel = require("../../../DB/Models/message");
const userModel = require("../../../DB/Models/user");


const addMessage = async (req, res)=>{

    const id = id.message.receiverId
    const {description}= req.body

  try{

    const newMessage = await messageModel.insertMany ({description, receiverId});
    const user = await userModel.findOneAndUpdate({id},{$push: {messagesArray : message._id}}, {new:true})

    if (newMessage) {
        res.json ({message:"Done"})

    } else {

        res.json({message: "In-valid user ID"})
        
    }
  }catch(error){

    res.json({message: "Catch Error", error})


  }

}


module.exports = addMessage