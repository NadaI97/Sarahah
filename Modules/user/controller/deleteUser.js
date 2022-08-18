const userModel = require("../../../DB/Models/user")


const deleteUser = (req, res)=>{

    const id = req.user._id

    try{

        const deletedUser = await userModel.findByIdAndDelete (id, {new: true})

     if (deletedUser) {

        res.json({message: "Deleted"})
         
     } else {
         
        res.json({message: "In- valid user ID"})

     }
    }catch(error){
         
        res.json({message: "catch error", error})


    }
}

module.exports = deleteUser