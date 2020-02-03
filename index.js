const Joi = require('@hapi/joi');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

const courses = [
  { id: 1, name: 'course1'},
  { id: 2, name: 'course2'},
  { id: 3, name: 'course3'}
]
app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

app.get('/api/courses',  (req, res) => {
  res.send(courses);  
});

app.get('/api/courses/:id',  (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send('The course with the given id was not found');
  res.send(course);
});

app.post('/api/courses', (req, res) => {
  const schema = Joi.object().keys({
    name: Joi.string().min(3).required(), 
  });
  

  const result = Joi.validate(schema, name)

  if (!result) {
    // 400 Bad Request
    res.status(400).send(result.error)
    return;
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(courses);
  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


