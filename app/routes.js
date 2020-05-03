const path = require('path');

/**
 * Routes function for the express server.
 *
 * @param {object} app - the express server instance.
 */
module.exports = (app) => {
  app.get('/', function (req, res) {
    // res.send('Hello World');
    res.sendFile(path.resolve(__dirname, '../views/index.html')); // without template engine.
    // res.render('home', { locals: { foo: 'bar' }}); // with template engine.
  });
};
