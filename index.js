'use strict';

var express = require('express')

const app = express()

const port = process.env.PORT || 3000;

app.route('/')
	.post((req, res) => res.body())


app.listen(port, function() {
    console.log('App listening on port ' + port);
});