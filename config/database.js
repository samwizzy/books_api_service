var mongoose = require("mongoose");

// set mongoose flag options
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

// connect database
mongoose.connect(process.env.DB_CONNECTION).catch((error) => error);

// database error exception
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("we're connected!");
  console.log(db.collections);
});
