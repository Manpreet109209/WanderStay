const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
    filename: {
        type: String,
        default: "listingimage"
    },
    url: {
        type: String,
        default: "https://plus.unsplash.com/premium_vector-1697729804286-7dd6c1a04597?q=80&w=770&auto=format&fit=crop"
    }
    },
    price: Number,
    location: String,
    country: String,
})

const Listing = mongoose.model("listing", listingSchema);
module.exports = Listing;