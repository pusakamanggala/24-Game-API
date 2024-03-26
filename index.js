const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors middleware

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use cors middleware to handle CORS
app.use(cors());

const appRoute = require("./src/routes/routes");
app.use("/", appRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`App running on port : ${PORT}`));
