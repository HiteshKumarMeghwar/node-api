const mongoose = require("mongoose");

const connectDB = (uri) => {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}
console.log("Database Connected Successfully");

module.exports = connectDB;