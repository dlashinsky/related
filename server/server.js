//PACKAGES
const express = require('express')
const rowdy = require('rowdy-logger')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()
const usersController = require('./controllers/usersController')

//PORT ACTIVATION
const app = express()
const PORT = process.env.PORT || 3001
const rowdyResults = rowdy.begin(app)


//MIDDLEWARE
app.use(morgan('tiny'))
app.use(cors())

//BODY PARSER
app.use(express.json())


//CONTROLLERS
app.use('/users', usersController)


//INDEX ROUTES
app.get('/', (req, res) =>{
    res.send("ITS WORKING")
})

app.post('/login')

app.post('/register')



app.listen(PORT, () =>{
    rowdyResults.print()
    console.log(`SHE up N' runnin' on dat 'dere port ${PORT}!  Get on wit it.  Life's a garden; DIG IT!`)
})