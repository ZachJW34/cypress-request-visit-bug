/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

const express = require("express");

const app = express();

app.post("/api/login", (req, res) => {
  const inAMonth = new Date();
  inAMonth.setDate(inAMonth.getDate() + 30);

  res.cookie("session", "test", { expires: inAMonth });

  res.status(200).send();
});

const port = process.env.port || 3333;

// Binds to ipv4 loopback (127.0.0.1)
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

// Using ipv6 loopback works just fine
// const server = app.listen(port, "::1", () => {
//   console.log(`Listening at http://localhost:${port}`);
// });

server.on("error", console.error);
