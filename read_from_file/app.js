const http = require("http");
const routes = require("./routes");
console.log(routes)
routes.test();

const server = http.createServer(routes.handler);

server.listen(3000, () => {
  console.log("server is running");
});
