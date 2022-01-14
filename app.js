// REQUIRING PACKAGES
const methodOverride = require('method-override'),
      bodyParser     = require('body-parser'),
      express        = require('express'),
      mongoose       = require('mongoose'),
      app            = express();

const journalRoutes  = require('./routes/journal');

// EXPRESS SET UP
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// MONGOOSE SET UP
mongoose.connect('mongodb://localhost/journal_app');

// ROUTES
app.use('/', journalRoutes);

// PORT SET UP
const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));