const Joi = require('@hapi/joi');

const registerValidation = (data) => {
    const schemaRegister = Joi.object({
        name: Joi.string().min(6).max(255).required(),
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().min(6).max(1024).required()
    })

    return schemaRegister.validate(data);
}

const loginValidation = (data) => {
    const schemaRegister = Joi.object({
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().min(6).max(1024).required()
    })

    return schemaRegister.validate(data);
    
}

module.exports = { registerValidation, loginValidation  }