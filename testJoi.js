const Joi = require('@hapi/joi');
console.log(Joi.version)

const schema = Joi.object({
  
  username: Joi.string().required(),
  email: Joi.string().email().required()
});

let username = 'Roger Brown';
let email = 'roger@example.com';

let data = { username, email };

const validation = schema.validate(data);

console.log(validation);
