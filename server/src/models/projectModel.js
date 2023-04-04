import mongoose, { Schema } from 'mongoose';

const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    period: {
        type: String,
        required: true,
    },

    member: {
        type: [String],
        required: true,
    },

    place:{
        type: [String],
        required: true,
    },

    detail_place:{
        type: [String],
        required: true,
    },

    plan:{
        type: [String],
        required: true,
    }

});
export const Project = mongoose.model('Project', projectSchema);