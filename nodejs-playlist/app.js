let express = require('express');
let todoController = require('./controllers/todoController');

let app = express();
app.set('view engine', 'ejs');
app.use(express.static('./assets'));

todoController(app);

app.listen(3000);
console.log('server starts and listen at port 3000');