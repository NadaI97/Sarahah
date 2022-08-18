const { auth, Roles } = require('../../middleware/auth')
const validation = require('../../middleware/validation')
const deleteUser = require('./controller/deleteUser')
const { profile, getAllUsers } = require('./controller/profile')
const { updateUser, updateProfilePic, updateCoverPic } = require('./controller/updateUser')
const multerData = require('../../services/multer')
const { updsateValidation, deleteValidation } = require('./user.validation')

const router= require ('express').Router()

router.patch ('/updateUser',auth(Roles.User), validation(updsateValidation), updateUser )
router.delete('/deleteUser', auth(Roles.User), validation(deleteValidation), deleteUser)
router.get ('/profile', auth(Roles.User), profile)
router.patch("/user/profile/pic", multerData.myMulter('users/profilePic', multerData.validationMethod.image).single('image'), auth(Roles.User), updateProfilePic)
router.patch("/user/profile/coverPic",
    multerData.myMulter('users/coverPic', multerData.validationMethod.image).array('image', 5),
    auth(Roles.User), updateCoverPic)


router.get ('/getAllUsers', getAllUsers)


module.exports = router