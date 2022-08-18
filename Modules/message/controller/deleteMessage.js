const messageModel = require("../../../DB/Models/message");
const userModel = require("../../../DB/Models/user");


const deleteMessage = async (req, res)=>{

    const id = req.user._id;
    const {_id}= req.body;

    try{

        const deletedMessage = await messageModel.findOneAndDelete ({receiverId :id , _id}, {new:true}).populate('receiverID', 'name')
        const user = await userModel.findOneAndUpdate({id},{$pull: {messagesArray : message._id}}, {new:true})


        if (deletedMessage) {
    
            res.json ({message:"Deleted"})
            
        } else {
            
            res.json ({message:"In-valid ID"})
        }
    }catch(error){

        res.json({message:"Catch Error", error})
    }
}



module.exports = deleteMessage