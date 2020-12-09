require("dotenv").config();
require("./config/database");
const express = require("express");
const logger = require("morgan");
const moment = require("moment");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const app = express();

// server port
const port = process.env.PORT || 5000;

// swagger metadata settings
const swaggerOptions = {
  swaggerDefinition: {
    // openapi: "3.0.0",
    info: {
      title: "Knobs Services",
      description: "Knobs Portal API Documentation",
      contacts: {
        name: "Samuel",
        email: "samwize.inc@gmail.com",
        url: "https://samuel.knobsystems.com",
      },
      license: {
        name: "Knobs License",
        url: "https://knobsystems.com/license",
      },
      servers: [`https://localhost:${port}`, `https://prod.books.com`],
      version: "1.0.0",
    },
    schemes: "http",
    host: `localhost:${port}`,
    basePath: "/",
  },
  apis: ["./routes/*"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// middlewares
app.locals.moment = require("moment");
app.use(express.json());
app.use(cors());
app.use(logger("dev"));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// routes imports
const bookRoute = require("./routes/bookRoute");

// routes middlewares
app.use(bookRoute);

// run server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
