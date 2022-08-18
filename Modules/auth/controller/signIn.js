const userModel = require("../../../DB/Models/user");
const bycrpt = require ('bcrypt')
const jwt  = require ('jsonwebtoken')



const signIn = async (req,res)=>{

  try{

    const {email, password} = req.body;

    const user = await userModel.findOne ({email})

    if (!user) {

    res.json({message: 'in-valid email'})    

    } else {
        
        const match = await bycrpt.compare(password, user.password)

        if (match) {

            const token = jwt.sign({id: user._id , isLoggedIn : true},   process.env.tokenSecret, {expiresIn: '1h'})

            res.json({message:"Done", token})
            
        } else {

            res.json({message: "in-valid email or password"})
            
        }
    }
  }catch(error){

    res.json({ message: "catch err ", error })

  }


}

module.exports = signIn