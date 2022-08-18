const validation = require('../../middleware/validation')
const { signUpValidator, signInValidator } = require('./auth.validation')
const signIn = require('./controller/signIn')
const signUp = require('./controller/signUp')

const router= require ('express').Router()

router.post ('/signUp',validation(signUpValidator) ,signUp)
router.post('/signIn', validation(signInValidator),signIn)

module.exports = router