/* eslint-disable no-undef */
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./src/utils/swagger-output.json');
const usersRoutes = require('./src/routes/users.route');
const postsRoutes = require('./src/routes/posts.route');
// Instantiate express
const app = express();
// Configure app to user bodyParser
const bodyParser = require('body-parser');
// Set our port
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

/** Swagger Initialization - START */
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
//http://localhost:3000/doc
/** Swagger Initialization - END */

// Register our routes in app
app.use('/users', usersRoutes);
app.use('/posts', postsRoutes);
// Start our server & Export our app for testing purposes
module.exports = app.listen(port, () => {
  console.log('Server is running at port 3000');
});
