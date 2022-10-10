const express = require('express')

const app = express()
const userRouter = require('./router/userRouter')
const dataRouter = require('./router/dataRouter')

app.use('/api/user', userRouter)
app.use('/api/data', dataRouter)

app.listen(5000)
