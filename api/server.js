const express = require("express");
const server = express();
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const carsRouter = require("../cars/cars-router");
// Global middleware
server.use(morgan("dev"));
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/cars", carsRouter);
server.get("/", (req, res) => {
  res.send("<h3>Its workinggg</h3>");
});

module.exports = server;
