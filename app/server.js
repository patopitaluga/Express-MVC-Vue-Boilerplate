const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const routes = require('./routes.js');

// const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
// app.use(bodyParser.json()); // parse application/json

// app.engine('html', require('express-es6-template-engine'));
// app.set('view engine', 'html');
// app.set('views', 'views');
app.use(express.static('public'));

if (process.argv[2] === 'dev') {
  process.env.NODE_ENV = 'development';
  console.log('\x1b[34m', '\nDev mode: Running webpack and watching changes.\n', '\x1b[0m'); // Blue

  fs.readdirSync(path.resolve(__dirname, '../public/dist/'), 'utf8').forEach(function(file) {
    if (file.slice(-3) === '.js' || file.slice(-4) === '.css') fs.unlinkSync(path.resolve(__dirname, '../public/dist/' + file));
  });

  const webpackConfig = require('./../webpack.config');

  const compiler = require('webpack')(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: 'errors-only'
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

routes(app);

app.listen((process.env.PORT || 3000), function () {
  console.log('App listening on port ' + (process.env.PORT || 3000));
});

/**
 * 404 page middleware must be set AFTER all routes, static (public) middleware AND webpack virtual files because only if any of these urls are served it must show 404 page.
 */
app.use((req, res) => {
  res.status(404).send('Content not found');
  // return res.status(404).render('page404.html', { });
});
