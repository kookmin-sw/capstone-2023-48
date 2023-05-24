import mongoose, { Schema } from 'mongoose';

const projectSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    startAt: {
        type: Number,
        required: true,
    },
    endAt: {
        type: Number,
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    member: {
        type: [Schema.Types.ObjectId],
        ref: 'User',
    },
    plan: {
        type: [{
            name: String,
            startAt: String,
            thumbnail: String,
            address: String,
            day: Number,
        }],
        default: [],
    },
    displayName:{
        type:[String],
    },
    days: {
        type: Number,
        required: true,
    }
    //
    // detail_place:{
    //     type: [String],
    //     required: true,
    // },
    //
    // plan:{
    //     type: [String],
    //     required: true,
    // }
});
export const Project = mongoose.model('Project', projectSchema);