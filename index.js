var express = require('express')
var app = express()

app.use(express.static(__dirname + '/frontend'));
app.engine('.html', require('ejs').__express);
app.set('views', './frontend');
app.set('view engine', 'html');


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Calculator listening on port 3000!')
})