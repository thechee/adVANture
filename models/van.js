const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    url: String,
    filename: String
});

ImageSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload', '/upload/w_200');
});


const VanSchema = new Schema({
    make: String,
    model: String,
    year: Number,
    rate: Number,
    mileage: Number,
    description: String,
    location: String,
    features: String,
    nextMaintenance: Number,
    images: [ImageSchema]
});

module.exports = mongoose.model('Van', VanSchema)