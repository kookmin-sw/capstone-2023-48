import {User} from "server/src/models/userModel.js";

const errorGenerator = (message, statusCode = 500) => {
    const error = new Error(message);
    error.statusCoded = statusCode;
    throw error;
}

export async function createUser(args) {
    const { id } = args.id;
    const ok = await User.findOne({id});
    if ( ok ) errorGenerator("중복된 id입니다. 다시 입력해주세요.",404);

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
    const user = await User.findOne({ _id: userId_ });
    return user;
}

export async function updateUser(userId_, newUser_) {
    const result = await User.updateOne({ _id: userId_ }, newUser_);
    return result;
}


