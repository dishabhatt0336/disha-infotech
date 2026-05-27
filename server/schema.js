const Joi = require('joi');

module.exports.contactSchema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        address: Joi.string().required(),
        phone: Joi.string().required(),
        service: Joi.string().required(),
        description: Joi.string().allow("", null),
}); 