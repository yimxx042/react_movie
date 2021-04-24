const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('../json-server/db.json');
const middlewares = jsonServer.defaults({
    static: './build'
});
const PORT = process.env.PORT || 8000;
ServiceUIFrameContext.use(middlewares);
server.use(jsonServer.rewriter({
    '/movies/*: '/$1',
}))
server.use(router);
server.listen(PORT, () => {
    console.log("Server is running");
});