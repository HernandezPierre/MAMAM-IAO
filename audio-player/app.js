const Twig = require("twig");
const express = require('express');
const app = express();


// static folder
app.use(express.static('public'));


// twig init
app.set("twig options", {
    allow_async: true,
    strict_variables: false,
});

app.set('view cache', false);
Twig.cache(false);


// get songs
const fs = require('fs');
function getFolders(path) {
    return fs.readdirSync(path).filter(function (file) {
        return fs.statSync(path+'/'+file).isDirectory();
    });
}
function getFiles(path){
    return fs.readdirSync(path);
}


// routing
app.get('/', function(req, res){

    var data_path = __dirname + '/public/data/songs/' + (req.query.folder !== undefined ? req.query.folder : '');

    res.render('index.twig', {
        request : req,
        url_root : req.protocol + '://' + req.get('host'),
        songs : getFiles(data_path),
        songs_folders : getFolders(data_path),
    });
});
app.listen(3000);
console.log('__SERVER : launched');