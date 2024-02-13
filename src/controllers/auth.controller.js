import User  from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { createToken } from '../libs/jwt.js'

export const register = async (req, res) => {
    const {username, email, password} = req.body;
    try{
        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: passwordHash
        });
        const userSaved = await newUser.save();
        const token = await createToken({id: userSaved.id});
        console.log(token);
        res.cookie('token', token);
        res.json({
            id: userSaved.id,
            username: userSaved.username,
            email: userSaved.email
        });
    }catch(error){
        console.log(error);
    }
}
export const login = (req, res) => res.send("login");