const userModel = require("../../../DB/Models/user");


const updateUser = async (req, res)=>{

    const id = req.user._id;
    const {name, phone, age}= req.body;

    try{
 
    const updatedUser = await userModel.findByIdAndUpdate (id, {name, phone, location}, {new: true}).select('-password')
    
    if(updatedUser){
        res.json({message:"Done"})

    }else{

        res.json({message: "In-valid user ID"})
    }
    }catch (error){

        res.json({message:"Error", err})

    }
}


const updateProfilePic = async (req, res) => {
   

    if (req.fileFormat) {
        res.json({ message: "in-valid file format" })
    } else {        
        const imageUrl = `${req.destinationFile}/${req.file.filename}`
        const user = await userModel.findByIdAndUpdate({ _id: req.user._id }, { profilePic: imageUrl }, { new: true })
        res.json({ message: "Done" })
    }


}



const updateCoverPic = async (req, res) => {  

    if (req.fileFormat) {
        res.json({ message: "in-valid format" })
    } else {
        const imageUrls = []
        for (let i = 0; i < req.files.length; i++) {
            imageUrls.push(`${req.destinationFile}/${req.files[i].filename}`)
        }
        const user = await userModel.findOneAndUpdate({ _id: req.user._id }, { coverPic: imageUrls }, { new: true })
        res.json({ message: "Done", user })
    }
}

module.exports = {updateUser, updateProfilePic, updateCoverPic}