const express = require("express");
require("dotenv").config();
require("./Database/connection");
const mainRouter = require("./Routes/mainRouter");

const app = express();
const port = process.env.PORT_APP || 3000;

app.use("/api/v1/", mainRouter);

app.listen(port, () => {
	console.log("Server running at http://localhost:" + port + "/api/v1/");
});
