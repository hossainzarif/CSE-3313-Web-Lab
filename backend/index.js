const express = require('express')

const app = express()
const userRouter = require('./router/userRouter')
const dataRouter = require('./router/dataRouter')

app.use('/api/user', userRouter)
app.use('/api/data', dataRouter)

app.listen(5000)

// Api key* URL.

// http://data.fixer.io/api/latest?access_key=106ab470d06b4c14d00c10f864ef62b6

//

//https://data.fixer.io/api/latest?access_key = xFnxphW8Skth0hQkqJPX0cuMwNjjMel4

// TAKA --> Rupee

// Taka --> USD --> Rupee

// 10/102.63* 82.34
