const connect = require('connect');
const serveStatic = require('serve-static');

const port = 8888;
const app = connect();

app.use(serveStatic(`${__dirname}/public`));
app.listen(port, function() {
    console.log(`http server running on ${port}`);
});