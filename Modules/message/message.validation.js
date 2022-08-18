const Joi = require ('joi');



    const addMessageValidator  = {
        body: Joi.object().required().keys({
            description : Joi.string().min(3).max(20).required(),
        }),
        params: Joi.object().required().keys({
            receiverId:Joi.string().min(24).max(24).required()
        })
    }

    const deleteMessageValidator = {

        params: Joi.object().required().keys({
            id:Joi.string().min(24).max(24).required()
        })

    }


    module.exports = {

        addMessageValidator,
        deleteMessageValidator
      
    }