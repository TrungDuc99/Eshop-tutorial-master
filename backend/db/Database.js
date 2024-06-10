const mongoose = require("mongoose");

const connectDatabase = () => {
  var urlConnection = "mongodb+srv://".concat(process.env.DB_USERNAME, ":").concat(process.env.DB_PASSWORD, "@").concat(process.env.DB_URLDEV || process.env.DB_URL, "/").concat(process.env.DB_NAME);
  mongoose
    .connect("mongodb+srv://dotrungduckspm:Oj8VjfE8rGhrCF47@cluster0.ktvdkjg.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongod connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
