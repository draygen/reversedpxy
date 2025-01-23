const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// Proxy requests to backend.freek.to
app.use(
  "/",
  createProxyMiddleware({
    target: "https://backend.freek.to",
    changeOrigin: true,
    onProxyRes: function (proxyRes, req, res) {
      // Add CORS headers
      proxyRes.headers["Access-Control-Allow-Origin"] = req.headers.origin || "*";
      proxyRes.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS";
      proxyRes.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization";
    },
  })
);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Proxy running on http://localhost:${PORT}`);
});
