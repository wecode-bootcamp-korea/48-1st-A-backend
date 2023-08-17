const express = require("express");

const { threadRouter } = require("./threads.router");


const routes = express.Router();

routes.use("/thread", threadRouter);


module.exports = { routes };
