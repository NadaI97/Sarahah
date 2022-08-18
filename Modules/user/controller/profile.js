const userModel = require("../../../DB/Models/user")



const profile = async (req, res)=>{

    const id = req.user._id

    try{

        const display = await userModel.findById(id).select('- password');

        res.json({message: "Done", display})
    }catch(error){

        res.json({message:"Error", err})

    }
}

const getAllUsers = async (req, res)=>{

    try{

        const display = await userModel.findById(id).select('- password').populate({
            path: "messagesArray"
        })

        res.json({message: "Done", display})
    }catch(error){

        res.json({message:"Error", err})

    }
}


module.exports = {profile, getAllUsers}