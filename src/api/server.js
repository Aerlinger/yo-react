/**
 * Express API server entry point.
 *
 * Serves the server-side REST API.
 */

let express = require('express');
let cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
let passport = require('passport');
let logger = require('morgan');
let config = require('./config');

let db = require('./models/db').connect(config.dbUri);

let dashboardRoutes = require('./controllers/dashboard');
let authRoutes = require('./controllers/auth');
let preferencesRoutes = require('./controllers/preferences');

let app = express();

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Initialise Passport before using the route middleware
app.use(passport.initialize());
app.use(passport.session());

// Bind Passport strategies
const localLoginStrategy = require('./strategies/local-login');
const localSignupStrategy = require('./strategies/local-signup');
passport.use('local-login', localLoginStrategy);
passport.use('local-signup', localSignupStrategy);

// Configure authentication middleware
const authCheckMiddleware = require('./middlewares/auth-check');
app.use('/api/dashboard', authCheckMiddleware);

// Configure routes
app.use('/api/', preferencesRoutes);
app.use('/api', dashboardRoutes);
app.use('/auth/', authRoutes);


// Start the server
const port = 8888;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
