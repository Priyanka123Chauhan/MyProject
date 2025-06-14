const Joi = require('joi');
const jwt = require('jsonwebtoken');

const signupValidation = (req,res,next) => {
    console.log('signupValidation req.body:', req.body);
    const schema = Joi.object(
{
    "name": Joi.string().min(3).max(100).required(),
    "email":Joi.string().email().required(),
    "pass": Joi.string().min(3).max(100).required()
}
    );
const{error} = schema.validate(req.body);
if(error)
{
   return res.status(400).json({message :"Bad Request!!",error});
}
next();
}


const loginValidation = (req,res,next) => {
    const schema = Joi.object(
{
    "email":Joi.string().email().required(),
    "pass": Joi.string().min(3).max(100).required()
}
    );
const{error} = schema.validate(req.body);
if(error)
{
   return res.status(400).json({message :"Bad Request!!",error});
}
next();
}

module.exports = {signupValidation,loginValidation};
