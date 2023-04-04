import { Router } from 'express';
import {createProject} from "../../../../planner-server/src/services/projectService.js";
const projectRouter = Router();

projectRouter.post('/', async (req, res) => {
    const { name, period, member, place, detail_place, plan } = req.body;
    const project = await createProject({
        name, period, member, place, detail_place, plan
    });
    res.send(project);
})
export default projectRouter;