const express = require("express");
const routes = require("./routes/routes");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.use(routes);



app.listen(8040, () => {
    console.log("Listening on http://localhost:8040");
});