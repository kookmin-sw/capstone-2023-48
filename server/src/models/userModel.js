import mongoose, { Schema } from 'mongoose';
import bcrypt from "bcrypt";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 15,
    },
    id: {
        type: String,
        required: true,
        maxlength: 15,
        unique: 1,
    },
    password: {
        type: String,
        required: true,
        minLength: 4,
    },
    phone: {
        type: String,
        required: true,
    }
});

userSchema.methods.comparePassword = function (input_password, cb) {
    bcrypt.compare(input_password, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

const jwt = require("jsonwebtoken");
userSchema.methods.generateToken = function ( cb ) {
    var user = this;
    var token = jwt.sign(user._id.toHexString(), "createToken");

    user.token = token;
    user.save(function (err, user) {
        if (err) return cb();
        cb(null, user);
    });
};

export const User = mongoose.model('User', userSchema);

