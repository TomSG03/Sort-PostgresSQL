const express = require('express');
const dbController = require('./dbController');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use('/css', express.static(__dirname + 'publuc/css'));
app.use('/js', express.static(__dirname + 'publuc/js'));

app.set('views', './views');
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('sort');
});

app.get('/showall', (req, res) => {
  const allItems = dbController.getAll(req, res);
  allItems.then((response) => res.render('showall', {response}));
});

app.get('/showbyid', (req, res) => {
  const numbers = dbController.getById(req, res);
  numbers.then((response) => res.render('showbyid', (response)));  
});

app.post('/api', (req, res) => {
  dbController.add(req, res).then((response) => res.json(response));;
});

app.delete('/api', (req, res) => {
  dbController.deleteAll(req, res).then((response) => res.json(response));
});

app.get('/api/all', (req, res) => {
  const allItems = dbController.getAll(req, res);
  allItems.then((response) => res.json(response));  
});

app.get('/api/:id', (req, res) => {
  const numbers = dbController.getById(req, res);
  numbers.then((response) => res.json(response));  
});

app.get('*', function(req, res){
  res.status(404).render('404');
});

app.listen(port, () => console.info(`Listen on port ${port}`));