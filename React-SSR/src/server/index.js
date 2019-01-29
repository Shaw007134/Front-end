import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../container/Home";

// import ReactDom from "react-dom";
// ReactDom.render(<Home />, document.getElementById("root"));

const app = express();
app.use(express.static("public"));

const content = renderToString(<Home />);
app.get("/", function(req, res) {
  res.send(`
    <html>
      <head>
        <title>SSR</title>
        <body>
          <div id='root'>${content}</div>
          <script src='/index.js'></script>
        </body>
      </head>
    </html>
  `);
});

var server = app.listen(3000);
