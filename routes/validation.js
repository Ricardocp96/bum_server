const joi = require('@hapi/joi')

//reg val 
const reg_val = (data) =>{
const schema= joi.object({

    uname:joi.string().required(),
    mobile: joi.number()
    .integer(),
    
    
    password: joi.string()
    .
    
    pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    confirmpassword: joi.string()
    .
    
    pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
});
return  schema.validate(data);

};


const log_val = (data) =>{

const schema=joi.object({
    mobile: joi.number().min(6).required(),
    password:joi.string().min(6).required()
});
return  schema.validate(data);
};

module.exports.reg_val =reg_val;
module.exports.log_val =log_val;