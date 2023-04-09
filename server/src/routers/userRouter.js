import { Router } from 'express';
import {User} from "server/src/models/userModel.js";
import {getUserById, updateUser} from "server/src/services/userService.js";
import {createUser} from "server/src/services/userService.js";
const userRouter = Router();

userRouter.post('/', async (req, res) => {
    const { name, id, password, phone } = req.body;
    const user = await createUser({
        name, id, password, phone
    });
    res.send(user);
})

userRouter.post('/sign_in', async (req_, res_) => {
    try {
        const { id, password } = req_.body;
        const user = await getUserById(id);
        if (!user) {
            throw new Error('User not found');
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            throw new Error('Wrong password!');
        }
        const { token, result } = await user.generateToken();
        result.token = token;
        const updatedRow = await updateUser(user._id, result);
        if (updatedRow.modifiedCount <= 0) {
            throw new Error('Sign in error!');
        }
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
        res_.status(404).json({ success: false, data: err_.message });
    }
});

export default userRouter;