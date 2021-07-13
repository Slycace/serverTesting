const express = require('express')
const app = express()
const serveIndex = require('serve-index')
const port = 3000
const path = require('path')

var groceries = [ {item: 'pizza', quantity: '2'},
                  {item: 'pizza', quantity: '2'},
                  {item: 'pizza', quantity: '2'}];



app.use(express.static('client/dist'));
// app.use('/groceries', function (req, res, next) {
//   console.log('Request Type:', req.method)
// })



app.post('/groceries', (req, res) => {
  console.log('got a post coming in', req)
   res.send(200);
});



app.get('/groceries', grocerylogger);



function grocerylogger(req, res, next) {
  console.log(req.originalUrl)
  console.log(req.body)
  res.send(groceries)
}



app.listen(port,() => {
  console.log("we are listening at port ", 3000)
})