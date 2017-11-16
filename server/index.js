let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

let app = express();
let PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../public')));
app.use('/bundles', express.static(path.join(__dirname, '../bundles')));

app.listen(PORT, function() {
  console.log('Sample form running on port: ', PORT);
});