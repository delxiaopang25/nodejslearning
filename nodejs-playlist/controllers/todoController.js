let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = function (app) {

    let data = [{item: 'get milk'}, {item: 'walk dog'},{item: 'kick some coding ass'}];

    app.get('/todo', function (req, res) {
        res.render('todo', {todos: data});
    });

    app.post('/todo',urlencodedParser, function (req, res) {
        data.push(req.body);
        res.end();
    });

    app.delete('/todo/:item', function (req, res) {
        let item  = req.params.item;
        console.log(item);
        data = data.filter(function (value) {
            return value.item.replace(/ /g,'-') !== item;
        });
        res.end();
    });
};