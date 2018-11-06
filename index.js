var express = require('express');
var path = require('path');
var app = express();
var http = require('http');

app.use(express.static(path.join(__dirname, 'public')));
//_dir file sass

app.set('views', path.join(__dirname, '/views'));
//_dir html

app.set('view engine', 'jade');

let date = new Date();
let year = date.getFullYear();

app.get('/', function(req ,res) {
  res.render('index', {
    title: 'deveSymphony',
    namenavbar: ['บทความ','งานออกแบบเล็กๆ','แหล่งเรียนรู้','ค้นหา'],
    content: 'content',
    name: 'ply nattawit',
    date: '12 ก.ค. 2561',
    titlecontent: 'งานออกแบบ',
    facebook:'https://www.facebook.com/plysymph',
    github: 'https://github.com/symphonySpy',
    copy: '© '+year+' - 2018 devesymphony.com'
  });


});
http.createServer(app).listen(3000, function() {
    console.log('App running on port 3000');
  });

  