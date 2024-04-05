require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  .connect(
    //I know url like this should not be made public and ideally we should have variable in .env file from which we can access this url but for making sure you are able to run my API in your local machine I have made it public
    process.env.dburl,
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
