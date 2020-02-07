const Joi = require('@hapi/joi');
console.log(Joi.version)

const schema = Joi.object({
  name: Joi.string().min(3).required(),
  username: Joi.string().required(),
  email: Joi.string().email().required()
});

let name = 'Roger'
let username = 'Roger Brown';
let email = 'roger@example.com';

let data = { name, username, email };

const validation = schema.validate(data);

console.log(validation);
