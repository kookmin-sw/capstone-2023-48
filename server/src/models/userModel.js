import mongoose, { Schema } from 'mongoose';
import bcrypt from "bcrypt";
import crypto from 'crypto';

export const encrypt = (text, key) => {
    const plain = `${text}/${key}`;
    return crypto.createHash('sha512').update(plain).digest('hex');
};

const saltRounds = 10;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 15,
    },
    id: {
        type: String,
        required: true,
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
    },
    token: {
        type: String,
    }
});

userSchema.methods.comparePassword = async function (plainPassword) {
    const isMatched = plainPassword === this.password;
    return isMatched;
};

userSchema.methods.generateToken = async function () {
    const user = this;

    const salt = await bcrypt.genSalt(saltRounds);
    const token = encrypt(
        `${user._id.toHexString()}-${Math.random() * 500}-${new Date().getTime()}`,
        salt,
    );
    const result = await user.save();
    return { token: token, result: result };
};

export const User = mongoose.model('User', userSchema);

