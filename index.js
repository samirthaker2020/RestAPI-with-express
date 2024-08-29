const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./utils/swagger-output.json')
const app = express()
const bodyParser = require('body-parser')
const usersRoutes = require('./routes/users.route')
const postsRoutes = require('./routes/posts.route')
const port = 3000
app.use(bodyParser.json())

/** Swagger Initialization - START */
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
/** Swagger Initialization - END */

app.use('/users', usersRoutes)
app.use('/posts', postsRoutes)
app.listen(port, () => {
  console.log('Server is running at port 3000')
})
