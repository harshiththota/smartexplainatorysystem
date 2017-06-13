var express = require('express');

var app =express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static('views'));


app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port 3000!')
});
