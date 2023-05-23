import {Project} from "../models/projectModel.js";
import { getUserByObjectId } from "../services/user-service.js"

export async function createProject(args) {
    const project = new Project({
        title: args.title,
        startAt: args.startAt,
        endAt: args.endAt,
        owner: args.userId,
        member : args.userId,
        displayName : args.displayName,
        days: args.days
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
        return project[0];
    }
}

export async function addMemberToProject(projectId, memberId) {
    const project = await getProjectByProjectId(projectId);
    const member = await getUserByObjectId(memberId);
    const displayName = member.id.slice(0,member.id.indexOf('@'));
    console.log('project',project);
    console.log('displayName',displayName);

    const result = await Project.updateOne(
        { _id: projectId },
        { $push: { member: memberId, displayName: displayName } }
      );

    // const result = await Project.updateOne({ _id: projectId }, { member: [...(project.member), memberId] },{displayName:[...(project.displayName), displayName]});
    return result;
}
export async function addPlan(projectId, args) {
    const project = await getProjectByProjectId(projectId);
    console.log(project);
    if (project.plan) {
        const result = await Project.updateOne({ _id: projectId }, {
            plan: [...(project.plan), {
                name: args.name,
                address: args.address,
                thumbnail: args.photo,
                startAt: args.startAt,
                endAt: args.endAt,
            }]
        })
        return result;
    } else {
        const result = await Project.updateOne({ _id: projectId }, {
            plan: [{
                name: args.name,
                address: args.address,
                thumbnail: args.photo,
                startAt: args.startAt,
                endAt: args.endAt,
            }]
        })
        return result;
    }

}