const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()
const controller = require('./controller')
const cors = require('cors')


const app = express()
app.use(bodyParser.json())
app.use(cors())


massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
}).catch(err => { console.log('ERROR CONNECTING TO DATABASE:', err) })

app.get('/api/shelfie', controller.get)
// app.post('/api/shelfie', controller.addItem)



const PORT = 4000
app.listen(PORT, () => {
console.log('HELLO OPERATOR, CAN YOU GIVE ME NUMBER:', PORT)
})