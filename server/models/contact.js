const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: String,
    phone: String,
    service: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
}, {
  timestamps: true,
});

module.exports = mongoose.model("Contact", contactSchema);