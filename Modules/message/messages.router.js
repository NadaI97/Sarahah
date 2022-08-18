const { auth, Roles } = require('../../middleware/auth')
const validation = require('../../middleware/validation')
const addMessage = require('./controller/addMessage')
const deleteMessage = require('./controller/deleteMessage')
const getAll = require('./controller/getAll')
const { addMessageValidator, deleteMessageValidator } = require('./message.validation')

const router= require ('express').Router()

router.post('/addMessage', validation(addMessageValidator), addMessage)
router.delete ('/deleteMessage', validation(deleteMessageValidator), auth(Roles.User), deleteMessage)
router.get ('/getAllMess', auth(Roles.User),getAll )



module.exports = router