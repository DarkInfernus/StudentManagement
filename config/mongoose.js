require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  .connect(
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch((error) => {
    console.log("Error in connectig to database :", error.message);
  });
