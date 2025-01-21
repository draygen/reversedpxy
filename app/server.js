const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();

// Proxy all requests to freek.to
app.use(
  "/",
  createProxyMiddleware({
    target: "https://freek.to",
    changeOrigin: true,
    pathRewrite: {
      "^/": "/", // Keep the same path
    },
  })
);

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);

const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();

// Proxy all requests to freek.to
app.use(
  "/",
  createProxyMiddleware({
    target: "https://freek.to",
    changeOrigin: true,
    pathRewrite: {
      "^/": "/", // Keep the same path
    },
  })
);

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);