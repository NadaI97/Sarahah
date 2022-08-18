const Joi = require ('joi');


const signUpValidator = {

    body: Joi.string().required().keys({

        name: Joi.string().required().pattern(new RegExp(/[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{2,20}$/)).messages({
            'string.empty': 'plz fill in u name',
            'any.required': 'plz send  u name',
            'string.pattern.base': 'plz enter valid name char',
        }),
    
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)).required(),
        cPassword: Joi.string().valid(Joi.ref('password')).required()
    })

 
}



const signInValidator = {

    body: Joi.object().required().keys({

        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)).required()
    })
}


module.exports = {

    signUpValidator,
    signInValidator
}