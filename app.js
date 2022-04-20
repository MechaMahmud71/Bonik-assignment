const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: "./config/config.env" });

require("colors");
require("./config/db");

const route = require("./routes/router");

const app = express();

app.use(cors());
app.use(express.json());


app.use("/", route);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
    console.log(
        `server has started on ${process.env.NODE_ENV} mode on port ${PORT}`.blue
            .bold,
    ),
);

process.on("unhandledRejection", (err) => {
    console.log(`ERROR: ${err.message}`.red);
    server.close(() => process.exit(1));
});



