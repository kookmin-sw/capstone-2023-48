import { Router } from 'express';
import {createProject, getProjectById} from "../services/projectService.js";
const projectRouter = Router();


projectRouter.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    const project = await getProjectById(userId);
    res.send(project);s
});
projectRouter.post('/', async (req, res) => {
    const { title, createAt, endAt, userId } = req.body;
    const project = await createProject({
        title, createAt, endAt, userId
    });
    res.send(project);
});
export default projectRouter;



