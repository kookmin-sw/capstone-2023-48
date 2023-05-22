import { Router } from 'express';
import {addMemberToProject, createProject, getProjectById, getProjectByProjectId} from "../services/project-service.js";
const projectRouter = Router();


projectRouter.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    const project = await getProjectById(userId);
    res.send(project);
});

projectRouter.get('/project/:projectId', async (req, res) => {
    const { projectId } = req.params;
    const project = await getProjectByProjectId(projectId);
    res.send(project);
});


projectRouter.post('/', async (req, res) => {
    const { title, startAt, endAt, userId, displayName } = req.body;
    const project = await createProject({
        title, startAt, endAt, userId, displayName
    });
    res.send(project);
});

projectRouter.post('/member', async (req, res) => {
    const { projectId, memberId } = req.body;
    const result = await addMemberToProject(projectId, memberId);
    res.send(result);
});
export default projectRouter;



