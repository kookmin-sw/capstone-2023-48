import { Router } from 'express';
import {addPlan} from "../services/project-service.js";
const planRouter = Router();


planRouter.get('/:userId', async (req, res) => {

});
planRouter.post('/', async (req, res) => {
    const { id, name, address, geometry, photo, startAt, day } = req.body;
    const result = await addPlan(id, {
        name,
        address,
        geometry,
        photo,
        day,
        startAt,
    })
    res.send({ success: true, result });
});


export default planRouter;



