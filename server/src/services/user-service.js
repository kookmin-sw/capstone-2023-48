import {User} from "../models/userModel.js";

const errorGenerator = (message, statusCode = 500) => {
    const error = new Error(message);
    error.statusCoded = statusCode;
    throw error;
}

export async function createUser(args) {
    const user = new User({
        name: args.name,
        phone: args.phone,
        id: args.id,
        password: args.password,
    })
    const result = await user.save();
    return result;
}

export async function getUserById(userId_) {
    const user = await User.findOne({ id: userId_ });
    return user;
}
export async function getUserByObjectId(userId_) {
    const user = await User.findOne({ _id: userId_ });
    return user;
}
export async function updateUser(userId_, newUser_) {
    const result = await User.updateOne({ _id: userId_ }, newUser_);
    return result;
}

export async function userSearch(email) {
    const regex = new RegExp(email, 'i');
    console.log(regex);
    const result = await User.find({ id: { $regex: regex } });
    return result || [];
}
