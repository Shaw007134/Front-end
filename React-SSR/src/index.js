import express from "express";
import Home from "./container/Home";
import React from "react";
import { renderToString } from "react-dom/server";
// import ReactDom from "react-dom";
// ReactDom.render(<Home />, document.getElementById("root"));

const app = express();
app.get("/", function(req, res) {
  res.send(renderToString(<Home />));
});

var server = app.listen(3000);
