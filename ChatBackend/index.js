var express = require('express')
var fs = require('fs')
var app = express()
var bodyParser = require('body-parser');

app.use(bodyParser.json())


app.post('/', function(request, response) {
  console.log('POST /')
  console.dir(request.body)
  response.send({data: 100})
})

const FRIENDS = [ // eventually replace from a database
  {id: "1", name: "Ziad", status: "Goodnight, I'm sleeping"},
  {id: "2", name: "Not Ziad", status: "Good morning, I'm awake"},
  {id: "3", name: "Other Ziad", status: "Life is a nightmare"},
  {id: "4", name: "Stupid Ziad", status: "Life is a dream"},
  {id: "5", name: "Smart Ziad", status: "I have a masters degree btw"}
]

app.get('/friends/:id', function(request, response) {
  var id = request.params.id;
  console.log('GET friends/ with ID', id)
  console.dir(request.body)
  response.send({data: FRIENDS})
})

const port = 3000
app.listen(port)
console.log(`Listening at http://localhost:${port}`)