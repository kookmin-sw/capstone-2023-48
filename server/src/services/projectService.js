import {Project} from "server/src/models/projectModel";

export async function createProject(args) {

    const project = new Project({
        name: args.name,
        period: args.period,
        member: args.member,
        place: args.place,
        detail_place: args.detail_place,
        plan:args.plan
    })

    const result = await project.save();
    return result;
}