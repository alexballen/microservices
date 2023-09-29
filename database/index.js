const server = require("./src/server.js");
const { createProxyMiddleware } = require("http-proxy-middleware");

server.use(
  "/Character",
  createProxyMiddleware({
    target: "http://database:8004/Character",
    changeOrigin: true,
  })
);

server.use(
  "/Film",
  createProxyMiddleware({
    target: "http://database:8004/Film",
    changeOrigin: true,
  })
);

server.use(
  "/Planet",
  createProxyMiddleware({
    target: "http://database:8004/Planet",
    changeOrigin: true,
  })
);

server.listen(8004, () => {
  console.log("Server listening on port 8004");
});
