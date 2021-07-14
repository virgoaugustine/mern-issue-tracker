const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const port = process.env.PORT 

const issuesRoute = require('./routes/issues.route');
const responsibleRoute = require('./routes/responsible.route');

const app = express();
app.use(cors())
app.use(express.json())
app.use('/issues', issuesRoute)
app.use('/resuser', responsibleRoute)













mongoose.connect(process.env.DB_URL, {useCreateIndex:true, useNewUrlParser:true, useUnifiedTopology:true})
const connection = mongoose.connection
app.listen(port, () => {
    console.log(`Server running on ${port}`)
    connection.once('open', () => console.log('Connected to MongoDB'))
})

