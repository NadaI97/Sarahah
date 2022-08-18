const Joi = require ('joi');



    const updsateValidation  = {
        body: Joi.object().required().keys({
            name : Joi.string().min(3).max(20).required(),
            phone : Joi.number().required(),
            age: Joi.number().required()
        }),
        params: Joi.object().required().keys({
            id:Joi.string().min(24).max(24).required()
        })
    }

    const deleteValidation = {

        params: Joi.object().required().keys({
            id:Joi.string().min(24).max(24).required()
        })

    }


    module.exports = {

        updsateValidation,
        deleteValidation
    }