const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const projectRoutes = require("./routes/project");
const adminRoutes = require("./routes/admin");

const path = require("path");
const crypto = require("crypto");

const { run } = require("./mongoConnectionFile.js");

run().catch(console.error);

dotenv.config();

const cors = require("cors");
app.use(cors());

app.use(express.static(path.join(__dirname, "..", "client", "dist")));

// app.use((req, res, next) => {
//   const nonce = crypto.randomBytes(16).toString("base64");
//   res.setHeader(
//     "Content-Security-Policy",
//     `script-src 'self' 'nonce-${nonce}'`
//   );
//   res.locals.nonce = nonce;
//   next();
// });

app.use((req, res, next) => {
  const nonce = crypto.randomBytes(16).toString("base64");

  // Set Content-Security-Policy header
  res.setHeader(
    "Content-Security-Policy",
    `script-src 'self' 'nonce-${nonce}'`
  );
  res.locals.nonce = nonce;

  // Set Permissions-Policy header with recognized features
  res.setHeader("Permissions-Policy", "geolocation=(self), microphone=()");

  next();
});

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.use(express.json());
app.use(bodyParser.json());

// API routes
app.use("/api/projects", projectRoutes);
app.use("/api/admin", adminRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"));
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connection successful"))
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`backend server is running on port ${PORT}`);
});
