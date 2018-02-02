import mongoose from 'mongoose';
import mongodbErrorHandler from 'mongoose-mongodb-errors';

const { Schema } = mongoose;

const postSchema = new Schema({
    author: {
        type: String,
        trim: true,
    },
    title: {
        type: String,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

postSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('User', postSchema);
