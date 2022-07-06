import mongoose from 'mongoose';

const UrlsSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true,
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true,
    },
    fullUrl: {
        type: String,
        required: true,
    },
    clicks: {
        type: Number,
        required: true,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const Urls = mongoose.model('url_shortener', UrlsSchema, "urls");

export default Urls