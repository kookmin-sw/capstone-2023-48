import { Router } from 'express';
import * as userServices from '../services/user-service.js';

const userRouter = Router();

userRouter.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    const user = await userServices.getUserByObjectId(userId);
    res.send(user);
})

userRouter.post('/', async (req, res) => {
    const { name, id, password, phone } = req.body;
    const user = await userServices.createUser({
        name, id, password, phone
    });
    res.send(user);
})

userRouter.post('/sign_in', async (req_, res_) => {
    try {
        const { id, password } = req_.body;
        const user = await userServices.getUserById(id);
        if (!user) {
            throw new Error('User not found');
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            throw new Error('Wrong password!');
        }
        const { token, result } = await user.generateToken();
        result.token = token;
        res_
            .cookie('w_auth', token, {
                expires: new Date('9999-12-31'),
                secure: false,
                httpOnly: false,
                signed: true,
            })
            .cookie('user_id', String(user._id), {
                expires: new Date('9999-12-31'),
                secure: false,
                httpOnly: false,
                signed: false,
            })
            .status(200)
            .json({ success: true, data: 'Sign in successfully' });
    } catch (err_) {
        res_.json({ success: false, data: err_.message });
    }
});

export default userRouter;