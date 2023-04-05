import { Router } from 'express';
import {User} from "server/src/models/userModel.js";
import {createUser} from "server/src/services/userService.js";
const userRouter = Router();

userRouter.post('/', async (req, res) => {
    const { name, id, password, phone } = req.body;
    const user = await createUser({
        name, id, password, phone
    });
    res.send(user);
})

userRouter.post('/login', async (req, res) => {
    User.findOne({ id: req.body.id }, (err,user) => {
        if ( !user ){
            return res.json({
                loginSuccess : false,
                message : "id를 다시 확인하세요."
            });
        }

        user.comparePassword(req.body.password, (err, isMatch) => {
            if ( !isMatch ){
                return res.json({
                    loginSuccess : false,
                    message : "비밀번호가 틀렸습니다."
                });
            }
            user.generateToken((err,user) => {
                if (err) return res.status(400).send(err);

                res
                    .cookie("hasVisited", user.token)
                    .status(200)
                    .json({ loginSuccess : true, userId : user._id});
            });
        });
    });
});


export default userRouter;