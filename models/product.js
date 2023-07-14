const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    price: {
        type: Number,
        validate: {
            validator: function (value) {
                return value !== undefined;
            },
            message: "Price must be provided",
        },
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.9,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: ["apple", "samsung", "dell", "mi"],
            message: `{VALUE} is not supported`,
        },
    },
});

module.exports = mongoose.model("Product", productSchema);