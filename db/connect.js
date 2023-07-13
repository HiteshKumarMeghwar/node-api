const mongoose = require("mongoose");

uri = "mongodb+srv://node-api-database:G30ef1gLorXT4Tnk@cluster0.jsoyuxd.mongodb.net/Cluster0?retryWrites=true&w=majority";

const connectDB = () => {
    console.log("Database Connected Successfully");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB;