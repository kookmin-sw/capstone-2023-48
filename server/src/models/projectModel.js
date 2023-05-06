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
    }
    //
    // member: {
    //     type: [String],
    //     required: true,
    // },
    //
    // place:{
    //     type: [String],
    //     required: true,
    // },
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