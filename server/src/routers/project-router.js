import { Router } from 'express';
import {createProject, getProjectById} from "../services/project-service.js";
const projectRouter = Router();


projectRouter.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    const project = await getProjectById(userId);
    res.send(project);
});
projectRouter.post('/', async (req, res) => {
    const { title, startAt, endAt, userId } = req.body;
    const project = await createProject({
        title, startAt, endAt, userId
    });
    res.send(project);
});
export default projectRouter;



