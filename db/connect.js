const mongoose = require("mongoose");

const connectDB = (uri) => {
    console.log("Database Connected Successfully");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB;