const mongoose = require("mongoose");
require("dotenv").config();

mongoose
	.connect(process.env.URL_MONGODB)
	.then((db) => console.log("🙌🙌 Connection with MongoDB established"))
	.catch((err) => console.dir(err));
