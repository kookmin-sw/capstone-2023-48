import {Project} from "../models/projectModel.js";

export async function createProject(args) {
    const project = new Project({
        title: args.title,
        creatAt: args.createAt,
        endAt: args.endAt,
        owner: args.userId,
    })
    const result = await project.save();
    return result;
}

export async function getProjectById(userId) {
    const project = await aProject.find({ owner: userId });
    return project;
}
