import {Project} from "../models/projectModel.js";

export async function createProject(args) {
    const project = new Project({
        title: args.title,
        startAt: args.startAt,
        endAt: args.endAt,
        owner: args.userId,
    })
    const result = await project.save();
    return result;
}

export async function getProjectById(userId) {
    const project = await Project.find({ owner: userId });
    if (project.length) {
        return project;
    } else {
        return [];
    }
}
export async function getProjectByProjectId(projectId) {
    const project = await Project.find({ _id: projectId});
    if (project) {
        return project;
    }
}

export async function addMemberToProject(projectId, memberId) {
    console.log(memberId);
    const project = await getProjectByProjectId(projectId);
    if (project.member && project.member.length) {
        const result = await Project.updateOne({ _id: projectId }, { member: [...(project.member), memberId] });
        console.log('!!');
        console.log(result);

        return result;
    } else {
        const result = await Project.updateOne({ _id: projectId }, { member: [memberId]});
        console.log('!');
        console.log(result);
        return result;
    }
}