const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { checkLogin } = require("./middleware/auth");
require("dotenv").config();
require("./config/db").connect();
const apiRoutes = require("./routes");
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// configure public and uploads
app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static("uploads"));

const corsOptions = {
  origin: "*",
  credentials: true,
};
app.use(cors(corsOptions));

app.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

app.use("/api", apiRoutes());

app.use((req, res, next) => {
  // Error goes via `next()` method
  setImmediate(() => {
    next(new Error("Something went wrong"));
  });
});
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
