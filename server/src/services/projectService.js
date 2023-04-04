import {Project} from "../models/projectModel.js";

export async function createProject(args) {
    const result = {
        msg: '프로젝트 생성이 성공했습니다.',
        data: {
            name: args.name,
            period: args.period,
            member: args.member,
            place: args.place,
            detail_place: args.detail_place,
            plan:args.plan
        }
    }

    // const project = new Project({
    //     name: args.name,
    //     period: args.period,
    //     member: args.member,
    //     place: args.place,
    //     detail_place: args.detail_place,
    //     plan:args.plan
    // })
    // const result = await user.save();
    return result;
}