const express = require("express");
const app = express();
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

require("dotenv").config({
  path: path.join(__dirname, ".env"),
});

const port = process.env.PORT || 3000;
app.use(expressLayouts);

app.set("view engine", "ejs");
app.set("views", [
  path.join(__dirname, "views"),
  path.join(__dirname, "views/pages"),
]);
app.set("layout", "layouts/layout");
app.use("/assets", express.static("assets"));
app.use("/resources", express.static("resources"));
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/mods", express.static(path.join(__dirname, "node_modules")));

//NOTE: if node_env is development, load browser-sync
if (process.env.NODE_ENV === "development") {
  const browserSync = require("browser-sync");
  const bsConfig = require("./bs-config");

  //change the port to PORT
  bsConfig.port = port;
  //change the proxy to localhost:PORT
  bsConfig.proxy = "localhost:" + port;

  //start browser-sync
  browserSync(bsConfig);
}

app.get("/", (req, res) => {
  res.render("index", { title: "Express Tailwind EJS" });
});

app.get("/about", (req, res) => {
  res.render("pages/about", { title: "About" });
});

app.listen(port, () => {
  console.log("Server listening on port " + port + " ...");
});
