const userModel = require("../../../DB/Models/user")


const signUp = async (req, res)=>{

   try{

    const {name, email, password}= req.body

    const newUser = new userModel ({name, email,password});

    const savedUser = await newUser.save()

    res.json ({message: "Done", savedUser})

   }catch(error){

    if (error.keyValue) {
        if (error.keyValue.email) {

            res.json({message: "Email already exists"})
            
        }
        
    } else {
        
        res.json({message:"catch Error", error})
    }
   }


}

module.exports = signUp
