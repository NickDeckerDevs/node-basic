var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');
app.get('/', function(request, response) {
	response.render('index', {
		title: 'shitstains',
		shit: 'shitssss',
		person: 'peshishsihishisste'
	})
});

app.listen(3000);
console.log('listenting');