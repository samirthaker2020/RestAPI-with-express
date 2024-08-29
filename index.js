const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./src/utils/swagger-output.json')
const app = express()
const bodyParser = require('body-parser')
const usersRoutes = require('./src/routes/users.route')
const postsRoutes = require('./src/routes/posts.route')
const port = 3000
app.use(bodyParser.json())

/** Swagger Initialization - START */
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
//http://localhost:3000/doc
/** Swagger Initialization - END */

app.use('/users', usersRoutes)
app.use('/posts', postsRoutes)
app.listen(port, () => {
  console.log('Server is running at port 3000')
})
