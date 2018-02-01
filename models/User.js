import mongoose from 'mongoose';
import { isEmail } from 'validator';
import mongodbErrorHandler from 'mongoose-mongodb-errors';

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        validate: [isEmail, 'Invalid Email Address'],
        required: 'Please supply an email address.',
    },
    password: {
        type: String,
    },
    fname: {
        type: String,
        trim: true,
        required: 'Please supply a first name.',
    },
    lname: {
        type: String,
        trim: true,
        required: 'Please supply a last name.',
    },
    location: {
        type: String,
    },
    role: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

userSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('User', userSchema);
