const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const controller = require("./controllers/messages_controller.js");

app.use(bodyParser.json());
app.use(express.static( __dirname + '/../public/build'))

const PORT = 3001;


app.get('/api/messages', controller.read)
app.post('/api/messages', controller.create)
app.put('/api/messages/:id', controller.update)
app.delete('/api/messages/:id', controller.delete)



app.listen(PORT, ()=>console.log(`listening on port ${PORT}`))