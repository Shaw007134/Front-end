const axios = require("axios");
const path = require("path");
const webpack = require("webpack");
const MemoryFs = require("memory-fs");
const serverConfig = require("../../build/webpack.config.server");
const ReactDomServer = require("react-dom/server");

const getTemplate = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:8888/public/index.html")
      .then(res => {
        resolve(res.data);
      })
      .catch(reject);
  });
};

const Module = module.constructor;
const mfs = new MemoryFs();
const serverCompiler = webpack(serverConfig);
let serverBundle;
serverCompiler.outputFileSystem = mfs;
serverCompiler.watch({}, (err, stats) => {
  if (err) throw err;
  stats = stats.toJson();
  stats.errors.forEach(err => console.error(err));
  stats.warnings.forEach(warn => console.error(warn));

  const bundlePath = path.join(
    serverConfig.output.path,
    serverConfig.output.filename
  );
  const bundle = mfs.readFileSync(bundlePath);
  const m = new Module();
  console.log("------");
  m._compile(bundle, "server-entry.js");
  serverBundle = m.default;
});

module.exports = function(app) {
  app.get("*", function(req, res) {
    getTemplate().then(template => {
      const content = ReactDomServer.renderToString(serverBundle, "utf-8");
      res.send(template.replace("<app></app>", content));
    });
  });
};
