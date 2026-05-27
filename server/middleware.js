const Contact = require("./models/contact.js");
const ExpressError = require("./utils/ExpressError.js");
const {contactSchema} = require("./schema.js");

//schema validating middleware for joi
module.exports.validateContact = (req, res, next) => {
    let {error} = contactSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else{
        next();
    }    
};